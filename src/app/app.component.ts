import { Component, ViewChild } from '@angular/core';
import { DocumentEditorContainer } from '@syncfusion/ej2-angular-documenteditor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangularproject';
  @ViewChild('documentEditor') editorObj !: DocumentEditorContainer;
  public onClick(){
    this.editorObj.documentEditor.selection.characterFormat.bold = true;
    this.editorObj.documentEditor.selection.characterFormat.italic = true;
    this.editorObj.documentEditor.selection.characterFormat.underline = 'Single';
    this.editorObj.documentEditor.selection.characterFormat.fontColor = 'Blue';
    this.editorObj.documentEditor.selection.characterFormat.highlightColor = 'Yellow';
  }

  public format(){
    // this.editorObj.documentEditor.selection.paragraphFormat.textAlignment = 'Center';
    // this.editorObj.documentEditor.editor.applyBullet('\uf0b7', 'Symbol');
    this.editorObj.documentEditor.editor.applyNumbering('%1)');
  }

  public createTable(){
    this.editorObj.documentEditor.editor.insertTable(3,3);
  }
}
