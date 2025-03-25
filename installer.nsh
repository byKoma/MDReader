!macro customInstall
  WriteRegStr HKCR ".md" "" "MDReader.Document"
  WriteRegStr HKCR "MDReader.Document" "" "Markdown Dokument"
  WriteRegStr HKCR "MDReader.Document\DefaultIcon" "" "$INSTDIR\resources\assets\md-icon.ico"
  WriteRegStr HKCR "MDReader.Document\shell\open\command" "" '"$INSTDIR\${APP_EXECUTABLE_FILENAME}" "%1"'
  
  ; Aktualisiere Explorer
  System::Call 'Shell32::SHChangeNotify(i 0x8000000, i 0, i 0, i 0)'
!macroend

!macro customUnInstall
  DeleteRegKey HKCR ".md"
  DeleteRegKey HKCR "MDReader.Document"
  
  ; Aktualisiere Explorer
  System::Call 'Shell32::SHChangeNotify(i 0x8000000, i 0, i 0, i 0)'
!macroend 