import { DaysForecastComponent } from './../days-forecast/days-forecast.component';
import { ICurrentWeather, IDaysForecast, IWeather } from './../interfaces';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {enviroment} from '../enviroments/environments'
import{map} from 'rxjs/operators'
interface ICurrentWeatherData{
  weather: [{
    description: string,
    icon: string
  }],
  main: {
    temp: number
  },
  sys: {
    country: string
  },
  dt: number,
  name: string
}
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  getCurrentWeather(city: string, country:string){
    let url:string = enviroment.baseUrl + city + ', ' + country + '&appid='+enviroment.appId;
    return this.httpClient.get<ICurrentWeatherData>(url).pipe(map(data =>
      this.transformToIcurrentWeather(data)));
  }
  getDaysForecast(city:string, country:string){
    
    let url:string = enviroment.baseDaysUrl + city + ', ' + country + '&appid='+enviroment.appId;
    return this.httpClient.get<IDaysForecast>(url).pipe(map(data=>
      this.transformToIWeatherForecast(data)
    ));
  }
  private transformToIcurrentWeather(data: ICurrentWeatherData):ICurrentWeather{
    return {
      city:data.name,
      country: data.sys.country,
      date: new Date(data.dt*1000),
      image:'https://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png',
      description: data.weather[0].description,
      temperature: this.convertKelvinToCelsious(data.main.temp)
    }
    
  }
  private convertKelvinToCelsious(kelvin:number):number{
      return kelvin - 273.15;
    }

    private transformToIWeatherForecast(data: IDaysForecast): IDaysForecast{
      data.list.forEach(element=>{
        element.temp.max = this.convertKelvinToCelsious( element.temp.max);
        element.temp.min = this.convertKelvinToCelsious( element.temp.min);
        element.temp.day = this.convertKelvinToCelsious( element.temp.day);
        element.temp.night = this.convertKelvinToCelsious( element.temp.night);
        element.temp.morn = this.convertKelvinToCelsious( element.temp.morn);
        element.temp.eve = this.convertKelvinToCelsious( element.temp.eve);

        element.datum = new Date(element.dt*1000);

        element.weather[0].icon = 'https://openweathermap.org/img/wn/'+element.weather[0].icon+'@2x.png';


      });
      return data;
    }
}
