import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: '../leaflet-map/leaflet-map.component.html',
  styleUrls: ['../leaflet-map/leaflet-map.component.scss']
})
export class LeafletMapComponent implements OnInit {

  private map: L.Map;
  private centroid: L.LatLngExpression = [40.0499345,32.896144]; //

  private initMap(): void {
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 12
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 10,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    const jittery = Array(5).fill(this.centroid).map( 
        x => [x[0] + (Math.random() - .5)/10, x[1] + (Math.random() - .5)/10 ]
      ).map(
        x => L.marker(x as L.LatLngExpression)
      ).forEach(
        x => x.addTo(this.map)
      );

    tiles.addTo(this.map);
  
  }

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }
}