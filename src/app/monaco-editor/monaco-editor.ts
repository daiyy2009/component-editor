import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnInit,
  OnDestroy
} from "@angular/core";
import { MonacoEditorLoader } from "./monaco-editor-loader";

import * as _ from "lodash";

declare const monaco: any;
declare const require: any;


/**
 * Example of init with html
 ```
  <h2>Monaco Editor Sample</h2>
  <div id="container" style="width:800px;height:600px;border:1px solid grey"></div>

  <script src="/monaco-editor/min/vs/loader.js"></script>
  <script>
    require.config({ paths: { 'vs': '/monaco-editor/min/vs' } });
    require(['vs/editor/editor.main'], function () {
      var editor = monaco.editor.create(document.getElementById('container'), {
        value: [
          'function x() {',
          '\tconsole.log("Hello world!");',
          '}'
        ].join('\n'),
        language: 'javascript'
      });
    });
  </script>
 ```
 */

@Component({
  selector: "monaco-editor",
  template: `
    <div #editor style="width: 1000px; height: 200px">
  `
})
export class MonacoEditor implements AfterViewInit, OnDestroy {
  @ViewChild("editor") editorRef: ElementRef;
  private _disposed = false;
  private _editor: any;

  constructor(private _monacoLoader: MonacoEditorLoader) {}

  ngAfterViewInit() {
    // Wait until monaco editor is available
    this._monacoLoader.waitForMonaco().then(() => {
      // Need to check if the view has already been destroyed before Monaco was loaded
      if (this._disposed) return;
      this.initMonaco();
    });
  }

  ngOnDestroy() {
    if (this._disposed) return;
    this._disposed = true;

    // Close possibly loaded editor component
    if (this._editor) this._editor.dispose();
    this._editor = null;
  }

  initMonaco() {
    this._editor = monaco.editor.create(this.editorRef.nativeElement, {
      value: [
        "function x() {", 
        '\tconsole.log("Hello superman!");',
        "}"].join("\n"),
      language: "javascript"
    });
  }
}
