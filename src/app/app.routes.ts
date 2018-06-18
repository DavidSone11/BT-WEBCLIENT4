import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { PageNotFoundComponent } from './components/page-not-found.component';



const mainRouteConfig: Routes = [
  { path: '', loadChildren: '../app/components/left-sidebar/left-sidebar.module#LeftSidebarModule' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forget', component: ForgetpasswordComponent },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(mainRouteConfig)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
