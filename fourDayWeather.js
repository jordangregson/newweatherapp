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
                        
                        console.log(data.daily[2].weather[0].main);

                        let dayOneConditions = data.daily[1].weather[0].main;
                        let dayTwoConditions = data.daily[2].weather[0].main;
                        let dayThreeConditions = data.daily[3].weather[0].main;
                        let dayFourConditions = data.daily[4].weather[0].main;
                       
                        //Day One Conditions
                        if (dayOneConditions == "Rain") {
                            let currentWeather = document.createElement("img");
                            currentWeather.src = "./Assets/Rain.png"

                            var src = document.getElementById("dayoneimg");
                            src.appendChild(currentWeather);
                        }

                        else if (dayOneConditions == "Clouds") {
                            let currentWeather = document.createElement("img");
                            currentWeather.src = "./Assets/Cloudy.png"

                            var src = document.getElementById("dayoneimg");
                            src.appendChild(currentWeather);
                        }

                        console.log(data.daily[0])


                        

                        
                    })

            })
    }
    else {
        console("Geolocation doesn't work")
    }


}

fourDay();

