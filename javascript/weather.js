let todayLat;
let todayLng;

let currentTemp;
let highTemp;
let lowTemp;
let currentLocation;

function geocodeLatLng() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                let todayLat = position.coords.latitude;
                let todayLng = position.coords.longitude;

                const api_url = `http://api.openweathermap.org/data/2.5/weather?lat=${todayLat}&lon=${todayLng}&units=imperial&appid=554d1f11a8df60eddbddf39182838a79`;

                fetch(api_url)
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {


                        //Todays Weather

                        currentLocation = document.getElementById("current-location");
                        currentLocation.innerHTML = data.name;

                        currentTemp = document.getElementById("current-temp");
                        currentTemp.innerHTML = Math.round(data.main.temp) + "°F";

                        lowTemp = document.getElementById("low-temp");
                        lowTemp.innerHTML = Math.round(data.main.temp_min) + "°F";

                        highTemp = document.getElementById("high-temp");
                        highTemp.innerHTML = Math.round(data.main.temp_max) + "°F";

                        let weather = data.weather[0].main;

                        if (weather == "Clouds") {
                            let currentWeather = document.createElement("img");
                            currentWeather.src = "./Assets/Cloudy.png"

                            var src = document.getElementById("weather-img");
                            src.appendChild(currentWeather);
                        }

                        else if (weather == "Clouds") {
                            let currentWeather = document.createElement("img");
                            currentWeather.src = "./Assets/Cloudy.png"

                            var src = document.getElementById("weather-img");
                            src.appendChild(currentWeather);
                        }

                        

                        
                    })

            })
    }
    else {
        console("Geolocation doesn't work")
    }


}

geocodeLatLng();

