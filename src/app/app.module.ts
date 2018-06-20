import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule,NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routes';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { AuthModule } from './auth.module';
import { CustomdropdownDirective } from './directives/customdropdown.directive';



@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {

}


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    CustomdropdownDirective,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule, 
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
