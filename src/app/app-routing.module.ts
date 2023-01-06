import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import { LoginComponent } from './login/login.component';
import {NotificationsComponent} from "./notifications/notifications.component";
import { VehiclesComponent } from './vehicles/vehicles/vehicles.component';
import {CreateComponent} from "./notifications/create/create.component";
import {ObvestilaComponent} from "./obvestila/obvestila.component";
import { PolnilniceComponent } from './polnilnice/polnilnice.component';
import {AdminComponent} from "./admin/admin.component";
import { RegisterComponent } from './register/register/register.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'obvestila', component: ObvestilaComponent},
  { path: 'polnilnice', component: PolnilniceComponent },
  { path: 'notifications/create', component: CreateComponent },
  { path: 'admin', component: AdminComponent},
  { path: 'register', component: RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
