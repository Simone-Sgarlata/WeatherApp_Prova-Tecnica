import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string) {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c79dde1be99c74215b1dc76d6f54c836&units=metric`
    );
  }
}
