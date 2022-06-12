import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module1RoutingModule } from './module1-routing.module';
import { Module1Component } from './module1.component';

import {DialogModule} from 'primeng/dialog'
import {ButtonModule} from 'primeng/button';


import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { DetailComponent } from './comps/detail/detail.component';
import { NotfoundComponent } from './comps/notfound/notfound.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/lang/', '.json');
}


@NgModule({
  declarations: [
    Module1Component,
    DetailComponent,
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    Module1RoutingModule,
    
    HttpClientModule,//要先注入这个服务不然会报错
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
  })
  ]
})
export class Module1Module { }
