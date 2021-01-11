import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './Index/Index.component';

const routes: Routes = [
  { path: '', redirectTo: 'JA', pathMatch: 'full' },
  { path: 'JA', component: IndexComponent },
  { path: '**', redirectTo: 'JA', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }