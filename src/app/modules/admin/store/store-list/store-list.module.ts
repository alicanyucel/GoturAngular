import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreListRoutingModule } from './store-list-routing.module';
import { StoreListComponent } from './store-list.component';


@NgModule({
  declarations: [
    StoreListComponent
  ],
  imports: [
    CommonModule,
    StoreListRoutingModule
  ]
})
export class StoreListModule { }
