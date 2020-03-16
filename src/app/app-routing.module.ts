import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorizationPageComponent } from './pages/authorization-page/authorization-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
    {path: '', redirectTo: 'authorization', pathMatch: 'full'},
    {path: 'authorization', component: AuthorizationPageComponent},
    {path: 'main', component: MainPageComponent},
    {path: '**', redirectTo: 'menu', pathMatch: 'full'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ AuthorizationPageComponent, MainPageComponent ]
