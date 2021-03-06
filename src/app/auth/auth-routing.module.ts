import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: AuthComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: AuthComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
