let number = document.getElementById('number');
number.innerHTML = 0;
let minus = document.getElementById('decrement');
let plus = document.getElementById('increment');

minus.addEventListener('click', decrement);
plus.addEventListener('click', increment);

function decrement(e) {
    e.preventDefault();
    number.innerHTML--;
}

function increment(e) {
    e.preventDefault();
    number.innerHTML++;
}