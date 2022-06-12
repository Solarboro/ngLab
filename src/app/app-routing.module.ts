import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './common/notfound/notfound.component';
import { IndexComponent } from './comps/index/index.component';

const routes: Routes = [
  

  { path: 'module1', loadChildren: () => import('./modules/test/module1/module1.module').then(m => m.Module1Module) }, { path: 'module2', loadChildren: () => import('./modules/test/module2/module2.module').then(m => m.Module2Module) },
  { path: 'index', component: IndexComponent},
  { path: '', redirectTo: 'index', pathMatch: 'full'},
  { path: '**', component: NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
