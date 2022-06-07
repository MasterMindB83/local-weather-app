import { UIService } from './ui.service';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './weather/weather.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { ControlsComponent } from './controls/controls.component';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { DaysForecastComponent } from './days-forecast/days-forecast.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    ControlsComponent,
    DaysForecastComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    InputTextModule
  ],
  providers: [WeatherService,UIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
