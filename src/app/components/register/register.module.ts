import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RegisterRouting } from './register.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    CommonModule,
    RegisterRouting,
    BrowserAnimationsModule
  ],
  declarations: [
    RegisterComponent,
  ]
})
export class RegisterModule {

}
