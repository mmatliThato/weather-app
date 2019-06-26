import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';




@Injectable()
export class WeatherProvider {
apikey='ddf5b8a5bedfd8e7defa0cb17444959e';
url;

place: string;
  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');

    this.url = 'openweathermap.org'
 
 
  }
 
getWeather(city, state){

  return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+ city +','+state+'&units=metric&APPID=ddf5b8a5bedfd8e7defa0cb17444959e')
  .map(res => res.json());


  

}
}
