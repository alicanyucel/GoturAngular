import { Component, Input, ViewChild } from '@angular/core';
import { ILocationPoint } from './map.types';
import { GoogleMap } from '@angular/google-maps';

@Component({
    selector: 'map',
    template: `
        <google-map width="100%" height="100%" [options]="options"></google-map>
    `,
    styles: [`
        :host {
            width: 300px;
            height: 300px;
        }
    `]
})
export class MapComponent {
    //
    @ViewChild(GoogleMap) public map: GoogleMap;

    //
    private _options: google.maps.MapOptions = {
        zoom: 12,
        center: { lat: 39.925533, lng: 32.866287 },
        streetViewControl: false,
        fullscreenControl: false,
        panControl: false,
        mapTypeControl: false,
        styles: [
            {
                featureType: "poi",
                stylers: [{ visibility: "off" }],
            },
            {
                featureType: "transit",
                stylers: [{ visibility: "off" }],
            }
        ]
    };
    public get options(): google.maps.MapOptions {
        return this._options;
    }
    @Input() public set options(v: google.maps.MapOptions) {
        this._options = { ...this._options, ...v };
    }

    //
    private _markers: Array<google.maps.Marker> = [];

    /** */
    constructor() { }

    //
    public setMarkers(locations: Array<ILocationPoint>): void {
        this.addOrUpdateMarkers(locations);
        this.clearRemovedMarkers(locations);
    }

    //
    public fitMarkerBounds(): void {
        const bounds = new google.maps.LatLngBounds();
        this._markers.forEach(m => {
            bounds.extend(m.getPosition());
        });
        this.map.fitBounds(bounds);
    }

    //
    private clearRemovedMarkers(locations: Array<ILocationPoint>): void {
        this._markers.forEach(marker => {
            const idx = locations.findIndex(location => location.id === marker.get("ID"));
            if (idx > -1) { return; }

            marker.setMap(undefined);
            const idxToRemove = this._markers.findIndex(m => m.get("ID") === marker.get("ID"));
            this._markers.splice(idxToRemove, 1);
        });
    }

    //
    private addOrUpdateMarkers(locations: Array<ILocationPoint>): void {
        locations.forEach(location => {
            const idx = this._markers.findIndex(m => m.get("ID") === location.id);
            if (idx === -1) { // add new marker.
                const marker = new google.maps.Marker();

                marker.set("ID", location.id);
                marker.setIcon({
                    url: location.icon.url,
                    scaledSize: new google.maps.Size(location.icon.scaledSize.width, location.icon.scaledSize.height)
                });
                marker.setPosition(new google.maps.LatLng(location.latitude, location.longitude));
                marker.setMap(this.map.googleMap);

                this._markers.push(marker);
            } else { // remove marker.
                this._markers[idx].setIcon({
                    url: location.icon.url,
                    scaledSize: new google.maps.Size(location.icon.scaledSize.width, location.icon.scaledSize.height)
                });
                this._markers[idx].setPosition(new google.maps.LatLng(location.latitude, location.longitude));
            }
        });
    }
}
