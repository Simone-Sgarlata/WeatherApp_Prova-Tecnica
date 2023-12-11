import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  weatherData: any;
  cityName: string = 'Milan';
  temperature: number = 0;
  humidity: number = 0;
  tempMin: number = 0;
  tempMax: number = 0;
  windSpeed: number = 0;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(this.cityName).subscribe(
      (data) => {
        this.weatherData = data;
        console.log(this.weatherData);
        this.temperature = this.weatherData.main.temp;
        this.humidity = this.weatherData.main.humidity;
        this.tempMax = this.weatherData.main.temp_max.toFixed();
        this.tempMin = this.weatherData.main.temp_min.toFixed();
        this.windSpeed = this.weatherData.wind.speed.toFixed();
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
