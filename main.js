const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow;
let fileToOpen = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    frame: false,
    icon: path.join(__dirname, 'assets/icon.ico'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: true
    }
  });

  mainWindow.loadFile('index.html');
  
  if (fileToOpen) {
    mainWindow.webContents.once('did-finish-load', () => {
      handleFileOpen(fileToOpen);
      fileToOpen = null;
    });
  }
}

ipcMain.on('window-control', (event, command) => {
  switch (command) {
    case 'minimize':
      mainWindow.minimize();
      break;
    case 'maximize':
      if (mainWindow.isMaximized()) {
        mainWindow.unmaximize();
      } else {
        mainWindow.maximize();
      }
      break;
    case 'close':
      mainWindow.close();
      break;
  }
});

function handleFileOpen(filePath) {
  console.log('Versuche Datei zu öffnen:', filePath);
  
  if (!filePath) {
    console.log('Kein Dateipfad angegeben');
    return;
  }

  if (!filePath.toLowerCase().endsWith('.md')) {
    console.log('Keine Markdown-Datei:', filePath);
    return;
  }

  try {
    filePath = path.resolve(filePath);
    console.log('Normalisierter Pfad:', filePath);

    if (!fs.existsSync(filePath)) {
      console.log('Datei existiert nicht:', filePath);
      return;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    console.log('Datei erfolgreich gelesen, Länge:', content.length);

    if (!mainWindow) {
      console.log('Fenster noch nicht bereit, merke Datei vor');
      fileToOpen = filePath;
      return;
    }

    if (mainWindow.webContents.isLoading()) {
      console.log('Fenster lädt noch, warte auf Fertigstellung');
      mainWindow.webContents.once('did-finish-load', () => {
        mainWindow.webContents.send('file-opened', { content, filePath });
      });
    } else {
      console.log('Sende Dateiinhalt an Fenster');
      mainWindow.webContents.send('file-opened', { content, filePath });
    }
  } catch (error) {
    console.error('Fehler beim Öffnen der Datei:', error);
  }
}

function processCommandLine() {
  if (process.platform === 'win32' && process.argv.length >= 2) {
    const filePath = process.argv[1];
    console.log('Kommandozeilenargument gefunden:', filePath);
    handleFileOpen(filePath);
  }
}

app.whenReady().then(() => {
  createWindow();
  
  if (app.isPackaged) {
    processCommandLine();
  }

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.setAsDefaultProtocolClient('md-reader');

app.on('open-file', (event, filePath) => {
  event.preventDefault();
  console.log('open-file Event empfangen:', filePath);
  handleFileOpen(filePath);
});

app.on('second-instance', (event, commandLine) => {
  console.log('second-instance Event empfangen:', commandLine);
  if (commandLine.length >= 2) {
    const filePath = commandLine[1];
    handleFileOpen(filePath);
  }

  if (mainWindow) {
    if (mainWindow.isMinimized()) mainWindow.restore();
    mainWindow.focus();
  }
}); 