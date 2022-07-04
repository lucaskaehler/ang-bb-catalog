import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'user', loadChildren: () => import('./user/user-module/user.module').then(m => m.UserModuleModule) }, { path: 'vendor', loadChildren: () => import('./vendor/vendor/vendor.module').then(m => m.VendorModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
