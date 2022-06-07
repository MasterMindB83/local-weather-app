import { IDaysForecast } from './../interfaces';
import { Component, OnInit } from '@angular/core';
import { UIService } from '../ui.service';
import { WeatherService } from '../weather/weather.service';
import {IDayForecast} from "../interfaces"

@Component({
  selector: 'app-days-forecast',
  templateUrl: './days-forecast.component.html',
  styleUrls: ['./days-forecast.component.scss']
})
export class DaysForecastComponent implements OnInit {

  constructor(private weatherService: WeatherService, private ui : UIService) {
    let daysForecast = null;
   }

  daysForecast: IDaysForecast = {
    city: {
      name: "",
      coord: {
        lon: 21.9033,
        lat: 43.3247
      },
      country: "RS",
      population: 250000
      },
    "list": [
    {
      dt: 1623837600,
      datum: new Date(),
      sunrise: 1623811892,
      sunset: 1623867284,
      temp: {
      day: 299.01,
      min: 285.6,
      max: 300.24,
      night: 289.29,
      eve: 297.7,
      morn: 287.18
      },
      feels_like: {
        day: 298.83,
        night: 289.15,
        eve: 297.59,
        morn: 286.96
      },
      pressure: 1008,
      humidity: 45,
      weather: [
      {
        main: "Clouds",
        description: "scattered clouds",
        icon: "03d"
      }
      ],
    speed: 5.95,
    deg: 325,
    gust: 7.76,
    clouds: 36,
    pop: 0.21
    }
    ]};
  ngOnInit(): void {
    this.ui.citySearched.subscribe((data)=>{
      this.weatherService.getDaysForecast(data.city, data.country).subscribe(data=>{
        this.daysForecast = data;
      });
    });
  }
}
