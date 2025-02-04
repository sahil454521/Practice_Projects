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