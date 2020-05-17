import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
export class  {
import { TableDynamicColumnsExample } from './table'

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    BrowserAnimationsModule,
    MatSliderModule
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent 
  ],
  bootstrap:    [ 
    AppComponent 
  ]
})
export class AppModule { }
