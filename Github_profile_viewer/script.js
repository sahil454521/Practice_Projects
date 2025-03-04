let body = document.getElementById('body');
let search = document.getElementById('search');
let profile = document.getElementById('profile');
let searchButton = document.getElementById('searchBtn');
;

searchButton.addEventListener('click', ()  => {
fetch(`https://api.github.com/${search.value}`)
.then(response => response.json())
})
