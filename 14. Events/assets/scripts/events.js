const buttons = document.querySelectorAll('button');

const buttonClickHandler = (event) => {
//   event.target.disabled = true;
  console.log(event);
};

// button.addEventListener('click', buttonClickHandler);

// setTimeout(() => {
//   button.removeEventListener('click', buttonClickHandler);
// }, 2000);

// buttons.forEach((btn) => {
//   btn.addEventListener('mouseenter', buttonClickHandler);
// });

// window.addEventListener("scroll", event => {
//     console.log(event);
// })

const form =document.querySelector('form');

form.addEventListener("submit", event => {
    event.preventDefault();
    console.log(event);
});