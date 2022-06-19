import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {DialogModule} from 'primeng/dialog'
import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NotfoundComponent } from './common/notfound/notfound.component';
import { NavComponent } from './common/nav/nav.component';
import { IndexComponent } from './comps/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    NavComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DialogModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
