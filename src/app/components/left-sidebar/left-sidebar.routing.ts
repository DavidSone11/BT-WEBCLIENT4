import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeftSidebarComponent } from './left-sidebar.component';
import { AuthGuard } from "../../guards/auth.guard";

const routes: Routes = [{
        path: '', component: LeftSidebarComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'dashboard', loadChildren: 'components/dashboard/dashboard.component.module#dashboardComponentModule' },
            { path: 'blank', loadChildren: 'components/blank/blank.component.module#blankComponentModule'},
            { path: 'userPlan', loadChildren: 'components/userplan/userplan.component.module#UserplanComponentModule'},
            { path: 'user', loadChildren: 'components/user/user.component.module#UserComponentModule' }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LeftSidebarRouting { }
