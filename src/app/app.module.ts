import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSliderModule } from "@angular-slider/ngx-slider";

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule, NgxSliderModule],
  declarations: [ AppComponent, AppRoutingModule.components ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
