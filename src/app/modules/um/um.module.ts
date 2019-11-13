import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UmRoutingModule } from './um-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    UmRoutingModule
  ]
})
export class UmModule { }
