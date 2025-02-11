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