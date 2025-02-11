const category = document.getElementById('category');   
const search = document.getElementById('search');
const searchbtn = document.getElementById('searchbtn');
const electronics = document.getElementById('electronics');
const clothing = document.getElementById('clothing');
const books = document.getElementById('books');

function filter(){
const searchValue = search.value.toLowerCase();
const productItems = document.querySelectorAll('.Items');

productItems.forEach((item) => {
    const title = item.querySelector('.title').innerText.toLowerCase();
    if(title.includes(searchValue)){
        item.style.display = 'block';
    }else{
        item.style.display = 'none';
    }
}


searchbtn.addEventListener('click',filter);
search.addEventListener('keyup',filter);