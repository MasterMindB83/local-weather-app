import { UIService } from './../ui.service';
import { WeatherService } from './../weather/weather.service';
import { ICurrentWeather, IDaysForecast } from './../interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {

  current: ICurrentWeather;
  constructor(private weatherService: WeatherService, private ui : UIService) { 
    this.current ={city: '',
    country:'',
    date: new Date(),
    image: '',
    temperature: 0,
    description: ''};

  }
  ngOnInit(): void {
    /*this.weatherService.getCurrentWeather('Nis', 'RS').subscribe((data)=>{
      this.current = data;
    });*/
    this.ui.citySearched.subscribe((data)=>{
      this.weatherService.getCurrentWeather(data.city, data.country).subscribe((data)=>{
        this.current = data;
      });
      
      
      
    });
  }

}
