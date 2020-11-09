import { User } from './User';
import { Company } from './Company';
import { googlemaps } from 'googlemaps';

export class CustomMap {
  private googleMap: google.maps.Map; // so no one else can get a hold of this out of this class
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }

  //One solution to have a reusable marker
  addMarker(mappable: User | Company): void {
    //TS will look only at the properties both share: location

    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
  }
  //instance of user and company * bad code because it repeats on user and company markers
  // addCompanyMarker(company: Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng,
  //     },
  //   });
  // }
}
