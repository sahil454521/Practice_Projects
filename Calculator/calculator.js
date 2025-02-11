<<<<<<< HEAD
let input= document.getElementById("input");
let button = document.querySelectorAll("button");

button.forEach(element => {
    element.addEventListener("click",(e)=>{
           console.log(e.target.textContent)

    if (e.target.textContent === "C") {
      input.innerText= "";
    } else if (e.target.textContent === "<") {
      input.innerText = input.innerText.slice(0, -1);
    } else if (e.target.textContent === "=") {
      input.innerText = eval(input.innerText);
    } else {
      input.innerText += e.target.textContent;
    }       
    input.scrollLeft = input.scrollWidth;  
    })
=======
let input= document.getElementById("input");
let button = document.querySelectorAll("button");

button.forEach(element => {
    element.addEventListener("click",(e)=>{
           console.log(e.target.textContent)

    if (e.target.textContent === "C") {
      input.innerText= "";
    } else if (e.target.textContent === "<") {
      input.innerText = input.innerText.slice(0, -1);
    } else if (e.target.textContent === "=") {
      input.innerText = eval(input.innerText);
    } else {
      input.innerText += e.target.textContent;
    }       
    input.scrollLeft = input.scrollWidth;  
    })
>>>>>>> 94f7588649f3947dae8e3c1d563e0c3b9662c5e4
});