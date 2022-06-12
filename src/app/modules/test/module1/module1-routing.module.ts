import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './comps/detail/detail.component';
import { NotfoundComponent } from './comps/notfound/notfound.component';
import { Module1Component } from './module1.component';

const routes: Routes = [
  { path: '', 
    component: Module1Component,
    children: [
      // {path: '', component: Module1Component},
      { path: 'detail', component: DetailComponent},
      { path: '**', component: NotfoundComponent }
    ]

  },
  // { path: '**', component: NotfoundComponent }
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
