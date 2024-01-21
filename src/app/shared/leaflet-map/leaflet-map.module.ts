import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletMapComponent } from '../leaflet-map/leaflet-map.component';
@NgModule({
    declarations: [
        LeafletMapComponent
        
    ],
    exports: [
        LeafletMapComponent
    ],
    imports: [BrowserModule, LeafletModule, FormsModule, CommonModule]

})
export class LeafletMapModule { }
