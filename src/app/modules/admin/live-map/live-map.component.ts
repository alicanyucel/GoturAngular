import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ILocationPoint as MapLocation } from 'app/shared/map/map.types';
import { interval } from 'rxjs';
import { SubSink } from 'subsink';
import { LiveMapService } from './live-map.service';
import { MapComponent } from 'app/shared/map/map.component';

@Component({
  selector: 'app-live-map',
  templateUrl: './live-map.component.html',
  styleUrls: ['./live-map.component.scss']
})
export class LiveMapComponent implements OnInit, OnDestroy {
  //
  @ViewChild(MapComponent) public map: MapComponent;

  private _storeIcon = {
    url: 'assets/icons/restaurant.png',
    scaledSize: {
      width: 64,
      height: 64
    }
  }
  private _carrierIcon = {
    url: 'assets/icons/delivery.png',
    scaledSize: {
      width: 48,
      height: 48
    }
  }

  private _storeLocations: Array<MapLocation> = [];
  private _carrierLocations: Array<MapLocation> = [];

  //
  private _showStores: boolean = true;
  public get showStores(): boolean {
    return this._showStores;
  }
  public set showStores(v: boolean) {
    this._showStores = v;
    this.setMapData();
  }

  //
  private _showCarriers: boolean = true;
  public get showCarriers(): boolean {
    return this._showCarriers;
  }
  public set showCarriers(v: boolean) {
    this._showCarriers = v;
    this.setMapData();
  }

  // 
  private _subsink = new SubSink();
  private _dataInterval = interval(3000);

  //
  constructor(
    private _mapService: LiveMapService
  ) { }

  //
  public async ngOnInit(): Promise<void> {
    await this.getInitialData()
    this._subsink.add(this._dataInterval.subscribe(async () => await this.updateCarrierLocations()));
  }

  //
  public ngOnDestroy(): void {
    this._subsink.unsubscribe();
  }

  //
  private async getInitialData(): Promise<void> {
    await Promise.all([
      this.getStoreLocations(),
      this.getCarrierLocations()
    ]);

    this.setMapData();
    this.map.fitMarkerBounds(); // only when init.
  }

  //
  private async getStoreLocations(): Promise<void> {
    const locations = await this._mapService.getStoreLocations();

    this._storeLocations = locations.map(l => {
      return {
        latitude: l.latitude,
        longitude: l.longitude,
        icon: this._storeIcon,
        id: l.storeId
      }
    });
  }

  //
  private async getCarrierLocations(mode: 'silent' | 'with-loading-bar' = 'with-loading-bar'): Promise<void> {
    const locations = await this._mapService.getCarrierLocations(mode);

    this._carrierLocations = locations.map(l => {
      return {
        latitude: l.latitude,
        longitude: l.longitude,
        icon: this._carrierIcon,
        id: l.carrierId,
        medatada: {
          dateTime: l.dateTime
        }
      }
    });
  }

  //
  private async updateCarrierLocations(): Promise<void> {
    if (!this._showCarriers) { return; }

    await this.getCarrierLocations('silent');
    this.setMapData();
  }

  //
  private setMapData(): void {
    if (this._showStores && this._showCarriers) {
      this.map.setMarkers(this._storeLocations.concat(this._carrierLocations));
      return;
    }

    if (!this._showStores && this._showCarriers) {
      this.map.setMarkers(this._carrierLocations);
      return;
    }

    if (this._showStores && !this._showCarriers) {
      this.map.setMarkers(this._storeLocations);
      return;
    }

    if (!this._showStores && !this._showCarriers) {
      this.map.setMarkers([]);
      return;
    }
  }
}
