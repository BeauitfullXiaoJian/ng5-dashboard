import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Breadcrumbs } from './../../dashboard/classes/breadcrumb.class';
import { MenuManagerComponent } from './pages/menu-manager/menu-manager.component';
import { PermissionManagerComponent } from './pages/permission-manager/permission-manager.component';
import { RoleManagerComponent } from './pages/role-manager/role-manager.component';
import { AccountManagerComponent } from './pages/account-manager/account-manager.component';

const routes: Routes = [
    { path: 'menu', component: MenuManagerComponent, data: { breadcrumbs: new Breadcrumbs([['菜单管理', 'bars']]) } },
    { path: 'permission', component: PermissionManagerComponent, data: { breadcrumbs: new Breadcrumbs([['权限管理', 'lock']]) } },
    { path: 'role', component: RoleManagerComponent, data: { breadcrumbs: new Breadcrumbs([['角色管理', 'lock']]) } },
    { path: 'account', component: AccountManagerComponent, data: { breadcrumbs: new Breadcrumbs([['账号管理', 'user']]) } },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class SystemRoutingModule { }
