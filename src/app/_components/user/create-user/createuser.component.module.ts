import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './createuser.component';
import { CreateUserComponentRouting } from './createuser.component.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    imports: [
        CommonModule,
        CreateUserComponentRouting
    ],
    declarations: [
        CreateUserComponent,

    ]
})
export class CreateUserComponentModule { }
