package org.mehmet;

import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.http.HttpResponse.BodyHandlers;
import org.json.JSONObject;

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

    public String getWeatherData(String lat, String lon) throws IOException, InterruptedException {
        String uri = String.format("https://api.tomorrow.io/v4/weather/realtime?location=%s,%s&apikey=%s",
                lat, lon, weatherApiKey);

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(uri))
                .header("apikey", weatherApiKey)
                .build();

        HttpResponse<String> response = client.send(request, BodyHandlers.ofString());
        JSONObject jsonResponse = new JSONObject(response.body());

        // Check if the response contains the location name and add it
        if (jsonResponse.getJSONObject("location").has("name")) {
            String locationName = jsonResponse.getJSONObject("location").getString("name");
            jsonResponse.put("locationName", locationName); // Add location name to the response
        }

        return jsonResponse.toString();
    }


}






