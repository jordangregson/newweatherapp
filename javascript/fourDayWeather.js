function fourDay() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                let todayLat = position.coords.latitude;
                let todayLng = position.coords.longitude;

                const api_url = `https://api.openweathermap.org/data/2.5/onecall?lat=${todayLat}&lon=${todayLng}&units=imperial&appid=554d1f11a8df60eddbddf39182838a79`;

                fetch(api_url)
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {

                        //Weather img
                        
                        

                        let dayOneConditions = data.daily[1].weather[0].main;
                        let dayTwoConditions = data.daily[2].weather[0].main;
                        let dayThreeConditions = data.daily[3].weather[0].main;
                        let dayFourConditions = data.daily[4].weather[0].main;
                       
                        console.log(dayThreeConditions);

                        //I DIDN'T DO ANY LOOPS FOR THESE, BUT I MIGHT IN THE FUTURE
                        //Day One Conditions
                        if (dayOneConditions.text == "Rain") {
                            let currentWeather = document.createElement("img");
                            currentWeather.src = "./Assets/Rain.png"

                            var src = document.getElementById("dayoneimg");
                            src.appendChild(currentWeather);
                        }

                        if (dayOneConditions == "Clouds") {
                            let currentWeather = document.createElement("img");
                            currentWeather.src = "./Assets/Cloudy.png"

                            var src = document.getElementById("dayoneimg");
                            src.appendChild(currentWeather);
                        }

                        else if (dayOneConditions == "Thunderstorm") {
                            let currentWeather = document.createElement("img");
                            currentWeather.src = "./Assets/Thunderstorms.png"

                            var src = document.getElementById("dayoneimg");
                            src.appendChild(currentWeather);
                        }

                        else if (dayOneConditions == "Drizzle" || "Rain") {
                            let currentWeather = document.createElement("img");
                            currentWeather.src = "./Assets/Rain.png"

                            var src = document.getElementById("dayoneimg");
                            src.appendChild(currentWeather);
                        }

                        else if (dayOneConditions == "Snow") {
                            let currentWeather = document.createElement("img");
                            currentWeather.src = "./Assets/Snow.png"

                            var src = document.getElementById("dayoneimg");
                            src.appendChild(currentWeather);
                        }

                        else if (dayOneConditions == "Clear") {
                            let currentWeather = document.createElement("img");
                            currentWeather.src = "./Assets/Sunny.png"

                            var src = document.getElementById("dayoneimg");
                            src.appendChild(currentWeather);
                        }

                        //Day Two Conditions
                        if (dayTwoConditions == "Clear") {
                            let currentWeather = document.createElement("img");
                            currentWeather.src = "./Assets/Sunny.png"

                            var src = document.getElementById("daytwoimg");
                            src.appendChild(currentWeather);
                        }
                        
                        else if (dayTwoConditions == "Rain") {
                            let currentWeather = document.createElement("img");
                            currentWeather.src = "./Assets/Rain.png"

                            var src = document.getElementById("daytwoimg");
                            src.appendChild(currentWeather);
                        }

                        else if (dayTwoConditions == "Clouds") {
                            let currentWeather = document.createElement("img");
                            currentWeather.src = "./Assets/Cloudy.png"

                            var src = document.getElementById("daytwoimg");
                            src.appendChild(currentWeather);
                        }

                        else if (dayTwoConditions == "Thunderstorm") {
                            let currentWeather = document.createElement("img");
                            currentWeather.src = "./Assets/Thunderstorms.png"

                            var src = document.getElementById("daytwoimg");
                            src.appendChild(currentWeather);
                        }

                        else if (dayTwoConditions == "Drizzle" || "Rain") {
                            let currentWeather = document.createElement("img");
                            currentWeather.src = "./Assets/Rain.png"

                            var src = document.getElementById("daytwoimg");
                            src.appendChild(currentWeather);
                        }

                        else if (dayTwoConditions == "Snow") {
                            let currentWeather = document.createElement("img");
                            currentWeather.src = "./Assets/Snow.png"

                            var src = document.getElementById("daytwoimg");
                            src.appendChild(currentWeather);
                        }

                        

                        //Day Three Conditions
                        if (dayThreeConditions == "Clear") {
                            let currentWeather = document.createElement("img");
                            currentWeather.src = "./Assets/Sunny.png"

                            var src = document.getElementById("daythreeimg");
                            src.appendChild(currentWeather);
                        }

                        else if (dayThreeConditions == "Rain") {
                            let currentWeather = document.createElement("img");
                            currentWeather.src = "./Assets/Rain.png"

                            var src = document.getElementById("daythreeimg");
                            src.appendChild(currentWeather);
                        }

                        else if (dayThreeConditions == "Clouds") {
                            let currentWeather = document.createElement("img");
                            currentWeather.src = "./Assets/Cloudy.png"

                            var src = document.getElementById("daythreeimg");
                            src.appendChild(currentWeather);
                        }

                        else if (dayThreeConditions == "Thunderstorm") {
                            let currentWeather = document.createElement("img");
                            currentWeather.src = "./Assets/Thunderstorms.png"

                            var src = document.getElementById("daythreeimg");
                            src.appendChild(currentWeather);
                        }

                        else if (dayThreeConditions == "Drizzle" || "Rain") {
                            let currentWeather = document.createElement("img");
                            currentWeather.src = "./Assets/Rain.png"

                            var src = document.getElementById("daythreeimg");
                            src.appendChild(currentWeather);
                        }

                        else if (dayThreeConditions == "Snow") {
                            let currentWeather = document.createElement("img");
                            currentWeather.src = "./Assets/Snow.png"

                            var src = document.getElementById("daythreeimg");
                            src.appendChild(currentWeather);
                        }

                        //Day Four Conditions
                        if (dayFourConditions == "Rain") {
                            let currentWeather = document.createElement("img");
                            currentWeather.src = "./Assets/Rain.png"

                            var src = document.getElementById("dayfourimg");
                            src.appendChild(currentWeather);
                        }

                        else if (dayFourConditions == "Clouds") {
                            let currentWeather = document.createElement("img");
                            currentWeather.src = "./Assets/Cloudy.png"

                            var src = document.getElementById("dayfourimg");
                            src.appendChild(currentWeather);
                        }

                        else if (dayFourConditions == "Thunderstorm") {
                            let currentWeather = document.createElement("img");
                            currentWeather.src = "./Assets/Thunderstorms.png"

                            var src = document.getElementById("dayfourimg");
                            src.appendChild(currentWeather);
                        }

                        else if (dayFourConditions == "Drizzle" || "Rain") {
                            let currentWeather = document.createElement("img");
                            currentWeather.src = "./Assets/Rain.png"

                            var src = document.getElementById("dayfourimg");
                            src.appendChild(currentWeather);
                        }

                        else if (dayFourConditions == "Snow") {
                            let currentWeather = document.createElement("img");
                            currentWeather.src = "./Assets/Snow.png"

                            var src = document.getElementById("dayfourimg");
                            src.appendChild(currentWeather);
                        }

                        else if (dayFourConditions == "Clear") {
                            let currentWeather = document.createElement("img");
                            currentWeather.src = "./Assets/Sunny.png"

                            var src = document.getElementById("dayfourimg");
                            src.appendChild(currentWeather);
                        }

                        


                        

                        
                    })

            })
    }
    else {
        console("Geolocation doesn't work")
    }


}

fourDay();

