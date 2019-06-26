import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WeatherProvider} from '../../providers/weather/weather';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 weather:any;
  temp :any;
  humidity:any;
  pressure:any;
  temp_min:any;
  temp_max:any; 
  name:any;
  description:any;
  citys: string;
  states: string;
  icon:any;
location:{
  city:String,
  state:String
}

  constructor(public navCtrl: NavController, private weatherProvider:WeatherProvider, private storage:Storage) {

  



  }

  searchLocation(city, state) {
    this.weatherProvider.getWeather(city, state).subscribe(weather =>{
    
   
      this.weather=weather;
      this.name=weather.name;
      this.temp=weather.main.temp;
      this.pressure=weather.main.pressure;
      this.humidity=weather.main.humidity;
      this.temp_min=weather.main.temp_min;
      this.temp_max=weather.main.temp_max;
      this.description=weather.weather[0].description;
      this.icon=weather.weather[0].icon +'.png';
      
          });
  }


  ionViewWillEnter(){
  
        this.location ={
          city: 'Soweto',
          state: 'gauteng'
        }
     
  






this.weatherProvider.getWeather(this.location.city, this.location.state).subscribe(weather =>{

this.weather=weather;
this.name=weather.name;
this.temp=weather.main.temp;
this.pressure=weather.main.pressure;
this.humidity=weather.main.humidity;
this.temp_min=weather.main.temp_min;
this.temp_max=weather.main.temp_max;
this.description=weather.weather[0].description;
this.icon=weather.weather[0].icon +'.png';
 console.log(this.icon)     

    });
  }

}
