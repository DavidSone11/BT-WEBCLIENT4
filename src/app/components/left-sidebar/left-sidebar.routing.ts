import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeftSidebarComponent } from './left-sidebar.component';
import { AuthGuard } from "../../guards/auth.guard";

const routes: Routes = [{
    path: '', component: LeftSidebarComponent,
    canActivate: [AuthGuard],
    children: [
        { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuard] },
        { path: 'trains', loadChildren: '../trains/trains.module#TrainsModule', canActivate: [AuthGuard] },
        { path: 'train-station', loadChildren: '../train-station/train-station.module#trainStationModule' },
        { path: 'blank', loadChildren: '..//blank/blank.module#blankModule' },
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
