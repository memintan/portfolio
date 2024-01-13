package org.mehmet;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
@CrossOrigin(origins = "https://memintan.github.io")
@RestController
public class WeatherController {

    private static final Logger logger = LoggerFactory.getLogger(WeatherController.class);
    private final WeatherService weatherService;

    // Constructor to autowire the WeatherService
    public WeatherController(WeatherService weatherService) {
        this.weatherService = weatherService;
    }

    @GetMapping("/weather/{lat},{lon}")
    public ResponseEntity<String> getWeather(@PathVariable String lat, @PathVariable String lon) {
        try {
            String weatherData = weatherService.getWeatherData(lat, lon);
            return ResponseEntity.ok(weatherData);
        } catch (Exception e) {
            logger.error("Error fetching weather data", e);
            return ResponseEntity.internalServerError().build();
        }
    }

}
