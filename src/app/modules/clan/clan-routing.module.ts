import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClanComponent } from './clan.component';
import { DetailComponent } from './comps/detail/detail.component';

const routes: Routes = [
  { path: '', component: ClanComponent },
  { path: 'detail', component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClanRoutingModule { }
