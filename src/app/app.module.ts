import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FocusMonitor } from "@angular/cdk/a11y";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { MyComponent } from "./my-component/my-component";
import { SliderOverviewExample } from "./slider-overview/slider-overview-example";
import { MonacoEditor } from "./monaco-editor/monaco-editor";
import { CeTree } from "./components/tree/ce-tree";
import { MonacoEditorLoader } from "./monaco-editor/monaco-editor-loader";
import { MatSliderModule, MatTableModule } from "@angular/material";
@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    SliderOverviewExample,
    MonacoEditor,
    CeTree
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatSliderModule,
    MatTableModule,
    FormsModule
  ],
  providers: [MonacoEditorLoader],
  bootstrap: [AppComponent]
})
export class AppModule {}
