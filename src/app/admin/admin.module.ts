import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { BookingsComponent } from './bookings/bookings.component';
import { MaterialModule } from '../material/material.module';
import { AdminRoutesComponent } from './admin-routes/admin-routes.component';


@NgModule({
  declarations: [
    AdminComponent,
    SideMenuComponent,
    BookingsComponent,
    AdminRoutesComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ]
})
export class AdminModule { }
