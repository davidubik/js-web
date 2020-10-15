// const askWeather = new XMLHttpRequest();
// const method = "GET"; 
// const url = "https://www.prevision-meteo.ch/services/json/paris";
// const parent = document.querySelector('div');
// const weatherResult = document.getElementById('ask-weather');

// askWeather.open(method, url);
// askWeather.send();


// askWeather.onreadystatechange = function(event){
//     if(this.readyState === XMLHttpRequest.DONE){
//         if(this.status === 200){
//             console.log(JSON.parse(this.responseText));
//         } else{
//             console.log("Statut :" + this.status);
//         }
//     }
// }


// weatherResult.addEventListener('click', (event) =>{
// const result = document.querySelector('#weather-result')
//  console.log(result.textContent = 'le temps est ' + responseText);
//  });

//   parent.appendChild(weatherResult);
  
  
        const url = "https://www.prevision-meteo.ch/services/json/paris"; 
        const button = document.querySelector('#ask-weather');

        button.addEventListener('click', function (e){
            const askWeather = new XMLHttpRequest();
            askWeather.open("GET", url);
            askWeather.onreadystatechange = function(event){
                    if(this.readyState === XMLHttpRequest.DONE){
                        if(this.status === 200){
                            const weather =JSON.parse(this.responseText);
                            const weatherResult = document.getElementById('weather-result');
                            const result = document.createElement('p').innerText = `Le temps est à Paris est : ${weather.current_condition.condition} - ${weather.current_condition.tmp} °`
                            weatherResult.append(result);
                        } else{
                            console.error("Statut :" + this.status);
                        }
                    }
                    
                }

            askWeather.send();

               

        });