export type MarkerIcon = {
    url: string,
    scaledSize?: { width: number, height: number }
}

export interface IPoint {
    latitude: number;
    longitude: number;
}

export interface ILocationPoint extends IPoint {
    id: string,
    medatada?: any,
    icon?: MarkerIcon
};
