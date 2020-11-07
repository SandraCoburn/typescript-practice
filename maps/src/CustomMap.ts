export class CustomMap {
  private googleMap: google.maps.Map; // so no one else can get a hold of this out of this class
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }
}
