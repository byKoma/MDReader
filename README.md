# MD Reader

Ein moderner, benutzerfreundlicher Markdown Reader, entwickelt mit Electron. Die Anwendung ermöglicht das einfache Lesen und Anzeigen von Markdown-Dateien mit einer eleganten Benutzeroberfläche.

## 📸 Screenshots

<div align="center">
  <img src="screenshots/md reader.png" alt="MD Reader Hauptansicht" width="800"/>
  <p><em>Hauptansicht des MD Readers mit geöffnetem Markdown-Dokument</em></p>
  
  <img src="screenshots/mit settings.png" alt="MD Reader mit Einstellungen" width="800"/>
  <p><em>MD Reader mit geöffneten Einstellungen</em></p>
</div>

## 🌟 Hauptfunktionen

- **Intuitive Benutzeroberfläche**: Moderne und übersichtliche Gestaltung für optimale Benutzerfreundlichkeit
- **Automatische Integration**: Nahtlose Registrierung als Standard-Anwendung für .md Dateien
- **Umfassende Markdown-Unterstützung**: 
  - Alle Standard Markdown-Elemente
  - Tabellen
  - Code-Blöcke mit Syntax-Highlighting
  - Mathematische Formeln
  - Checklisten
- **Echtzeit-Vorschau**: Sofortige Darstellung der Markdown-Formatierung
- **Datei-Verwaltung**: Einfaches Öffnen und Navigieren zwischen Dokumenten
- **Plattformübergreifend**: Verfügbar für Windows, macOS und Linux

## 🚀 Erste Schritte

### Voraussetzungen

- [Node.js](https://nodejs.org/) (Version 14 oder höher)
- npm (wird mit Node.js installiert)

### Installation

1. Repository klonen:
```bash
git clone https://github.com/byKoma/MDReader.git
cd MDReader
```

2. Abhängigkeiten installieren:
```bash
npm install
```

3. Anwendung starten:
```bash
npm start
```

### Build erstellen

Für die Erstellung einer ausführbaren Datei:

```bash
npm run build
```

Die kompilierte Anwendung finden Sie im `dist` Ordner.

## 💡 Verwendung

1. **Erste Schritte**:
   - Starten Sie die Anwendung
   - Wählen Sie "Datei öffnen" oder nutzen Sie Drag & Drop
   - Alternativ: Doppelklicken Sie eine .md Datei (nach Installation)

2. **Tastenkombinationen**:
   - `Strg + O`: Datei öffnen
   - `Strg + Q`: Anwendung beenden
   - `Strg + +`: Vergrößern
   - `Strg + -`: Verkleinern

## 🛠 Technologie-Stack

- **[Electron](https://www.electronjs.org/)**: Framework für Desktop-Anwendungen
- **[Marked](https://marked.js.org/)**: Markdown-Parser und Compiler
- **[Prism.js](https://prismjs.com/)**: Syntax-Highlighting
- **HTML/CSS/JavaScript**: Frontend-Entwicklung
- **[electron-builder](https://www.electron.build/)**: Anwendungs-Packaging

## 🤝 Beitragen

Beiträge sind willkommen! Bitte beachten Sie folgende Schritte:

1. Fork des Repositories
2. Feature-Branch erstellen (`git checkout -b feature/AmazingFeature`)
3. Änderungen committen (`git commit -m 'Add some AmazingFeature'`)
4. Branch pushen (`git push origin feature/AmazingFeature`)
5. Pull Request erstellen

## 📝 Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert - siehe [LICENSE](LICENSE) Datei für Details.

## 📞 Kontakt

byKoma - [GitHub](https://github.com/byKoma)

Projekt-Link: [https://github.com/byKoma/MDReader](https://github.com/byKoma/MDReader)

## 🙏 Danksagung

- [Electron](https://www.electronjs.org/) für das großartige Framework
- [Marked](https://marked.js.org/) für den Markdown-Parser
- Allen Mitwirkenden und Unterstützern des Projekts 