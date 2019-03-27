import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CoreLibModule } from 'core-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
