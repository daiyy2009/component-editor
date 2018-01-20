import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FocusMonitor } from "@angular/cdk/a11y";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { MyComponent } from "./my-component/my-component";
import { SliderOverviewExample } from "./slider-overview/slider-overview-example";
import { MatSliderModule, MatTableModule } from "@angular/material";

@NgModule({
  declarations: [AppComponent, MyComponent, SliderOverviewExample],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatSliderModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
