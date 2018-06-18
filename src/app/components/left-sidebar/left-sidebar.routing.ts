import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeftSidebarComponent } from './left-sidebar.component';
import { AuthGuard } from "../../guards/auth.guard";

const routes: Routes = [
    {
        path: '', component: LeftSidebarComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'dashboard', loadChildren: 'app/components/dashboard/dashboard.component.module#dashboardComponentModule',canActivate: [AuthGuard] },
            // { path: 'club', loadChildren: 'app/components/club/club.module#ClubModule',canActivate: [AuthGuard] },
            // { path: 'members', loadChildren: 'app/components/member/member.module#MembersModule' },
            { path: 'blank', loadChildren: 'app/components/blank/blank.component.module#blankComponentModule' },
            { path: 'userPlan', loadChildren: 'app/components/user-plan/user-plan.component.module#UserplanComponentModule' },
            { path: 'user', loadChildren: 'app/components/user-plan/user-plan.component.module#UserplanComponentModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LeftSidebarRoutingModule { }
