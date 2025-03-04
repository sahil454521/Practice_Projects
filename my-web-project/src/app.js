// filepath: /my-web-project/my-web-project/src/app.js
document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.createElement('h1');
    greetingElement.textContent = 'Welcome to My Web Project!';
    document.body.appendChild(greetingElement);

    const button = document.createElement('button');
    button.textContent = 'Click Me';
    document.body.appendChild(button);

    button.addEventListener('click', () => {
        alert('Button was clicked!');
    });
});