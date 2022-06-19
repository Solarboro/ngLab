import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClanRoutingModule } from './clan-routing.module';
import { ClanComponent } from './clan.component';
import { DetailComponent } from './comps/detail/detail.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// primeng
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [
    ClanComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    ClanRoutingModule
  ]
})
export class ClanModule { }
