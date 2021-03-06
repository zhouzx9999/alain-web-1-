import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SysMenuComponent } from './menu/menu.component';
import { ACLGuard } from '@delon/acl';
import { SysOrgComponent } from './org/org.component';
import { SysDictComponent } from './dict/dict.component';
import { SysAclComponent } from './acl/acl.component';
import { SysRoleComponent } from './role/role.component';
import { SysUserComponent } from './user/user.component';

const routes: Routes = [

  { path: 'user', component: SysUserComponent, canActivate: [ ACLGuard ], data: { guard: 'user' } },
  { path: 'menu', component: SysMenuComponent, canActivate: [ ACLGuard ], data: { guard: 'menu' } },
  { path: 'org', component: SysOrgComponent, canActivate: [ ACLGuard ], data: { guard: 'org' } },
  { path: 'dict', component: SysDictComponent, canActivate: [ ACLGuard ], data: { guard: 'dict' } },
  { path: 'role', component: SysRoleComponent, canActivate: [ ACLGuard ], data: { guard: 'role' } },
  { path: 'acl', component: SysAclComponent, canActivate: [ ACLGuard ], data: { guard: 'acl' } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SysRoutingModule { }
