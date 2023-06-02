import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoutesComponent } from './admin-routes/admin-routes.component';
import { AdminComponent } from './admin.component';
import { BookingsComponent } from './bookings/bookings.component';
import { DriversComponent } from './drivers/drivers.component';

const routes: Routes = [
  {
    path: 'bookings',
    component: BookingsComponent
  },
  {
    path: 'routes',
    component: AdminRoutesComponent
  },
  {
    path: 'drivers',
    component: DriversComponent
  },
  {
    path: '',
    component: AdminComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
