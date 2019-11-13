import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PvRoutingModule } from './pv-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    PvRoutingModule
  ]
})
export class PvModule { }
