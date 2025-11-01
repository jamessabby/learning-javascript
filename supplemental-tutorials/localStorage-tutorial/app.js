document.addEventListener('DOMContentLoaded', () => {

  const input = document.querySelector('input'); 
  const h2 = document.querySelector('h2');
  const button = document.querySelector('button')

  h2.innerHTML = localStorage.getItem('value');
  input.addEventListener("keyup", display);

  button.addEventListener('click', () => {
    localStorage.removeItem('value');
  })

  function display() {
    localStorage.setItem('value', input.value);
    h2.innerHTML = localStorage.getItem('value');

  }

});

