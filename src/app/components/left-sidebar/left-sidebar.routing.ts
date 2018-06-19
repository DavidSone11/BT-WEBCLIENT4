import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeftSidebarComponent } from './left-sidebar.component';
import { AuthGuard } from "../../guards/auth.guard";

const routes: Routes = [{
    path: '', component: LeftSidebarComponent,
    canActivate: [AuthGuard],
    children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        {
            path: 'dashboard',
            loadChildren: 'app/components/dashboard/dashboard.module#DashboardModule',
            canActivate: [AuthGuard]
        },
        {
            path: 'blank',
            loadChildren: 'app/components/blank/blank.component.module#blankComponentModule',
            canActivate: [AuthGuard]
        },
        { path: 'userPlan', loadChildren: 'app/components/userplan/userplan.component.module#UserplanComponentModule' },
        { path: 'user', loadChildren: 'app/components/user/user.component.module#UserComponentModule' }
    ]
}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LeftSidebarRouting { }
