import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeftSidebarComponent } from './left-sidebar.component';
import { AuthGuard } from "../../guards/auth.guard";

const routes: Routes = [{
    path: '', component: LeftSidebarComponent,
    canActivate: [AuthGuard],
    children: [
        { path: 'dashboard', loadChildren: './app/components/dashboard/dashboard.module#DashboardModule',canActivate: [AuthGuard] },
        { path: 'trains', loadChildren: './app/components/trains/trains.module#trainsModule',canActivate: [AuthGuard]},
        { path: 'train-station', loadChildren: './app/components/train-station/train-station.module#trainStationModule'},
        { path: 'blank', loadChildren: './app/components/blank/blank.module#blankModule'},
        { path: 'userPlan', loadChildren: './app/components/userplan/userplan.module#UserplanModule'},
        { path: 'user', loadChildren: './app/components/user/user.module#UserModule'}
       
    ]
}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LeftSidebarRouting { }
