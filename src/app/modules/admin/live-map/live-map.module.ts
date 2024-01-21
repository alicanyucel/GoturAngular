import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiveMapRoutingModule } from './live-map-routing.module';
import { LiveMapComponent } from './live-map.component';
import { MapModule } from 'app/shared/map/map.module';
import { LiveMapService } from './live-map.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    LiveMapComponent
  ],
  imports: [
    CommonModule,
    MapModule,
    FormsModule,
    LiveMapRoutingModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatDividerModule
  ],
  providers: [
    LiveMapService
  ]
})
export class LiveMapModule { }
