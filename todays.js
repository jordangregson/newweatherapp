let todayLat;
let todayLng;

let todayTemp;
let todayFeelsLike;
let todayCondition;

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

                        todayTemp = document.getElementById("todays-temp");
                        todayTemp.innerHTML = Math.round(data.main.temp) + "°";

                        todayFeelsLike = document.getElementById("todays-feels-like");
                        todayFeelsLike.innerHTML = "Feels like " + Math.round(data.main.feels_like) + "°";

                        todayCondition = document.getElementById("todays-condition");
                        todayCondition.innerHTML = data.weather[0].main;

                        let weather = data.weather[0].main;

                        if (weather == "Clouds") {
                            let partlyCloudy = document.createElement("img");
                            partlyCloudy.src = "./Assets/Cloudy.png"

                            var src = document.getElementById("today-weather-img");
                            src.appendChild(partlyCloudy);
                        }

                        else if (weather == "Rain" || weather == "Drizzle") {
                            let partlyCloudy = document.createElement("img");
                            partlyCloudy.src = "./Assets/Rain.png"

                            var src = document.getElementById("today-weather-img");
                            src.appendChild(partlyCloudy);
                        }

                        else if (weather == "Clear") {
                            let partlyCloudy = document.createElement("img");
                            partlyCloudy.src = "./Assets/Sunny.png"

                            var src = document.getElementById("today-weather-img");
                            src.appendChild(partlyCloudy);
                        }

                        else if (weather == "Snow") {
                            let partlyCloudy = document.createElement("img");
                            partlyCloudy.src = "./Assets/Snow.png"

                            var src = document.getElementById("today-weather-img");
                            src.appendChild(partlyCloudy);
                        }

                        else if (weather == "Thunderstorm") {
                            let partlyCloudy = document.createElement("img");
                            partlyCloudy.src = "./Assets/Thunderstorms.png"

                            var src = document.getElementById("today-weather-img");
                            src.appendChild(partlyCloudy);
                        }

                        else {
                            let partlyCloudy = document.createElement("img");
                            partlyCloudy.src = "./Assets/fog.png"

                            var src = document.getElementById("today-weather-img");
                            src.appendChild(partlyCloudy);
                        }

                        console.log(data.weather[0].main)
                    })

            })
    }
    else {
        console("Geolocation doesn't work")
    }


}

geocodeLatLng();

