package org.mehmet;

import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.http.HttpResponse.BodyHandlers;
@Service
public class WeatherService {
    private String weatherApiKey;
    private HttpClient client;

    public WeatherService() {
        weatherApiKey = System.getenv("WEATHER_API_KEY");
        if (weatherApiKey == null) {
            throw new IllegalStateException("WEATHER_API_KEY is not set in the environment variables.");
        }
        client = HttpClient.newHttpClient();
    }

    public String getWeatherData() throws IOException, InterruptedException {
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://api.tomorrow.io/v4/timelines"))
                .header("apikey", weatherApiKey)
                // ... other headers or parameters
                .build();

        HttpResponse<String> response = client.send(request, BodyHandlers.ofString());
        String responseBody = response.body();
        // Process the response body here
        return responseBody; // Return the response body for further processing
    }

    public String getWeatherData(String location) throws IOException, InterruptedException {
        // Define required parameters for the API call
        String fields = "temperature,weatherCode";

        // Construct the URI with query parameters for realtime data
        String uri = String.format("https://api.tomorrow.io/v4/weather/realtime?location=%s&fields=%s&apikey=%s",
                location, fields, weatherApiKey);

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(uri))
                .header("apikey", weatherApiKey)
                .build();

        HttpResponse<String> response = client.send(request, BodyHandlers.ofString());
        return response.body();
    }



    // Rest

    public static void main(String[] args) {
        try {
            WeatherService weather = new WeatherService();
            String location = "77406"; // Richmond
            String weatherData = weather.getWeatherData(location);
            System.out.println("Weather Data: " + weatherData);
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }
}
