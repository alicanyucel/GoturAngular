import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
    declarations: [
        MapComponent
    ],
    exports: [
        MapComponent
    ],
    imports: [
        CommonModule,
        GoogleMapsModule
    ]
})
export class MapModule { }
