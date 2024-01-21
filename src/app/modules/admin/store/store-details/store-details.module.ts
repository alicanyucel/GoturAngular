import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreDetailsRoutingModule } from './store-details-routing.module';
import { StoreDetailsComponent } from './store-details.component';


@NgModule({
  declarations: [
    StoreDetailsComponent
  ],
  imports: [
    CommonModule,
    StoreDetailsRoutingModule
  ]
})
export class StoreDetailsModule { }
