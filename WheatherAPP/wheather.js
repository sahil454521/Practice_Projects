<<<<<<< HEAD
const api_key = 'b939d537523042adb2e165139251102';
const input = document.getElementById('city'); 
const btn = document.getElementById('btn');
const icon = document.querySelector('.icon');
const description = document.querySelector('.description');
const weather = document.querySelector('.weather');
const temperature = document.querySelector('.temperature');

btn.addEventListener('click', () => {
    let city = input.value;
    getweather(city);
})

function getweather(city) {
    console.log(city);
    fetch(`http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}&aqi=no`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const iconCode = data.current.condition.icon;
        icon.innerHTML = `<img src="${iconCode}" alt="Weather Icon"/>`;

        const weatherCity = data.location.name;
        const weatherCountry = data.location.country;
        weather.innerHTML = `${weatherCity}, ${weatherCountry}`;

        const weatherTemp = data.current.temp_c;
        temperature.innerHTML = `${weatherTemp}°C`;

        const weatherDesc = data.current.condition.text;
        description.innerHTML = weatherDesc;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
}
=======
const api_key = '82cce4b17954e086cd57a4bdfc95cdc2';
const input = document.querySelector('.input'); 
const btn = document.getElementById('btn');
const icon = document.getElementById('icon');
const description = document.getElementById('description');
const weather = document.getElementById('wheather');
const temperature = document.getElementById('tempreature');

btn.addEventListener('click', () => {
    let city = input.value;
    getweather(city);
    
})

function getweather(city) {
    console.log(city);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        icon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        description.innerText = data.weather[0].description;
        weather.innerText = data.weather[0].main;
        temperature.innerText = data.main.temp;
    })
>>>>>>> 94f7588649f3947dae8e3c1d563e0c3b9662c5e4
