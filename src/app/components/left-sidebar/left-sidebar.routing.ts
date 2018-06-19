import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeftSidebarComponent } from './left-sidebar.component';
import { AuthGuard } from "../../guards/auth.guard";

const routes: Routes = [{
    path: '', component: LeftSidebarComponent,
    canActivate: [AuthGuard],
    children: [
        { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuard] },
        { path: 'train', loadChildren: '../train/train.module#TrainModule', canActivate: [AuthGuard] },
        { path: 'trainstation', loadChildren: '../train-station/train-station.module#trainStationModule' },
        { path: 'blank', loadChildren: '../blank/blank.module#blankModule' },
        { path: 'home', loadChildren: '../home/home.module#HomeModule' },
        { path: 'userPlan', loadChildren: '../userplan/userplan.module#UserplanModule' },
        { path: 'user', loadChildren: '../user/user.module#UserModule' }

    ]
}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LeftSidebarRouting { }
