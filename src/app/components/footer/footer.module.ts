import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { footerRouting } from './footer.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    CommonModule,
    footerRouting,
    BrowserAnimationsModule
  ],
  declarations: [
    FooterComponent,
  ]
})
export class footerModule {

}
