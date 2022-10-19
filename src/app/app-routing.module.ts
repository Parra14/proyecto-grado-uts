import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//componentes
import { TasksComponent } from './components/tasks/tasks.component'
import { PrivateTasksComponent } from './components/private-tasks/private-tasks.component'
import { SingnupComponent } from './components/singnup/singnup.component'
import { SigninComponent } from './components/signin/signin.component'
import { LoadComponent } from './shaders/load/load.component'
import { AuthGuard } from "./auth.guard";
import { PCListComponent } from './components/pc/pc-list/pc-list.component'
import { PCCreateComponent } from "./components/pc/pc-create/pc-create.component";
import { PeripheralsListComponent } from "./components/peripherals/peripherals-list/peripherals-list.component";
import { PeripheralsCreateComponent } from "./components/peripherals/peripherals-create/peripherals-create.component";


const routes: Routes = [

  { path: 'tasks', component: TasksComponent },
  { path: 'private', component: PrivateTasksComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SingnupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'load', component: LoadComponent },
  { path: 'list-pc', component: PCListComponent, canActivate: [AuthGuard] },
  { path: 'create-pc', component: PCCreateComponent, canActivate: [AuthGuard] },
  { path: 'edit-pc/:id', component: PCCreateComponent, canActivate: [AuthGuard] },
  { path: 'list-peripherals', component: PeripheralsListComponent, canActivate: [AuthGuard] },
  { path: 'create-peripherals', component: PeripheralsCreateComponent, canActivate: [AuthGuard] },
  { path: 'edit-peripherals/:id', component: PeripheralsCreateComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/list-pc', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
