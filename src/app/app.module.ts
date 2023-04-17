import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {ViewsModule} from './../views/views.module';//se llama al modulo de todas las vitas

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ViewsModule//se importa para poder utilizar el router-outlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
