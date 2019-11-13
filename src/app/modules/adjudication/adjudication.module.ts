import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdjudicationRoutingModule } from './adjudication-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    AdjudicationRoutingModule
  ]
})
export class AdjudicationModule { }
