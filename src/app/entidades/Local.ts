/** Representa um local no Google Maps */
export class Local{
    constructor(nomeDoLocal, latitude, longitude){
        this.nomeDoLocal = nomeDoLocal;
        this.latitude = latitude;
        this.longitude = longitude;
    }
    nomeDoLocal: string;
    latitude: string;
    longitude: string;
}