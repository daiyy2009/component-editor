import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Inject,
  Input,
  NgZone,
  Output,
  ViewChild
} from "@angular/core";

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

import { fromEvent } from "rxjs/observable/fromEvent";

import { Subscription } from "rxjs/Subscription";


let loadedMonaco: boolean = false;

let loadPromise: Promise<void>;

declare const monaco: any;

declare const require: any;

@Component({
  selector: "monaco-editor",
  templateUrl: "monaco-editor.html",

  styles: [
    `

    :host {

      display: block;

      height: 200px;

    }



    .editorContainer {

      width: 100%;

      height: 98%;

    }

  `
  ]
})
export class MonacoEditor {
 
  // ngAfterViewInit(): void {
  //   if (loadedMonaco) {
  //     // Wait until monaco editor is available

  //     loadPromise.then(() => {
  //       this.initMonaco(this.options);
  //     });
  //   } else {
  //     loadedMonaco = true;

  //     loadPromise = new Promise<void>((resolve: any) => {
  //       const baseUrl = this.config.baseUrl || "/assets";

  //       if (typeof (<any>window).monaco === "object") {
  //         resolve();

  //         return;
  //       }

  //       const onGotAmdLoader: any = () => {
  //         // Load monaco

  //         (<any>window).require.config({
  //           paths: { vs: `${baseUrl}/monaco/vs` }
  //         });

  //         (<any>window).require(["vs/editor/editor.main"], () => {
  //           if (typeof this.config.onMonacoLoad === "function") {
  //             this.config.onMonacoLoad();
  //           }

  //           this.initMonaco(this.options);

  //           resolve();
  //         });
  //       };

  //       // Load AMD loader if necessary

  //       if (!(<any>window).require) {
  //         const loaderScript: HTMLScriptElement = document.createElement(
  //           "script"
  //         );

  //         loaderScript.type = "text/javascript";

  //         loaderScript.src = `${baseUrl}/monaco/vs/loader.js`;

  //         loaderScript.addEventListener("load", onGotAmdLoader);

  //         document.body.appendChild(loaderScript);
  //       } else {
  //         onGotAmdLoader();
  //       }
  //     });
  //   }
  // }

  // private initMonaco(options: any): void {
  //   this._editor = monaco.editor.create(
  //     this._editorContainer.nativeElement,
  //     options
  //   );

  //   this._editor.setValue(this._value);

  //   this._editor.onDidChangeModelContent((e: any) => {
  //     const value = this._editor.getValue();

  //     this.propagateChange(value);

  //     // value is not propagated to parent when executing outside zone.

  //     this.zone.run(() => (this._value = value));
  //   });

  //   this._editor.onDidBlurEditor((e: any) => {
  //     this.onTouched();
  //   });

  //   // refresh layout on resize event.

  //   if (this._windowResizeSubscription) {
  //     this._windowResizeSubscription.unsubscribe();
  //   }

  //   this._windowResizeSubscription = fromEvent(window, "resize").subscribe(() =>
  //     this._editor.layout()
  //   );

  //   this.onInit.emit(this._editor);
  // }

  // ngOnDestroy() {
  //   if (this._windowResizeSubscription) {
  //     this._windowResizeSubscription.unsubscribe();
  //   }

  //   if (this._editor) {
  //     this._editor.dispose();
  //     this._editor = undefined;
  //   }
  // }
}
