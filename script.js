let btn_0 = document.getElementById('btn-0');
let btn_1 = document.getElementById('btn-1');
let btn_2 = document.getElementById('btn-2');
let btn_3 = document.getElementById('btn-3');
let btn_4 = document.getElementById('btn-4');
let btn_5 = document.getElementById('btn-5');
let btn_6 = document.getElementById('btn-6');
let btn_7 = document.getElementById('btn-7');
let btn_8 = document.getElementById('btn-8');
let btn_9 = document.getElementById('btn-9');
let btn_dot = document.getElementById('btn-.');
let btn_minus = document.getElementById('btn--');
let btn_plus = document.getElementById('btn-+');
let btn_equal = document.getElementById('btn-=');
let btn_multiply = document.getElementById('btn-x')
let btn_divide = document.getElementById('btn-/');
let output = document.getElementById('output');

btn_0.addEventListener('click', () => {
    output.value ='0'
});

btn_1.addEventListener('click', () => {
    output.value ='1'
});

btn_2.addEventListener('click', () => {
    output.value ='2'
});

btn_3.addEventListener('click', () => {
    output.value ='3'
});

btn_4.addEventListener('click', () => {
    output.value ='4'
});

btn_5.addEventListener('click', () => {
    output.value ='5'
});

btn_6.addEventListener('click', () => {
    output.value ='6'
});

btn_7.addEventListener('click', () => {
    output.value ='7'
});

btn_8.addEventListener('click', () => {
    output.value ='8'
});

btn_9.addEventListener('click', () => {
    output.value ='9'
});

btn_minus.addEventListener('click', () => {
    output.value ='-'
});

btn_plus.addEventListener('click', () => {
    output.value ='+'
});

btn_equal.addEventListener('click', () => {
    output.value ='='
});

btn_divide.addEventListener('click', () => {
    output.value ='/'
});

btn_dot.addEventListener('click', () => {
    output.value="."
})

btn_multiply.addEventListener('click', () => {
    output.value ='x'
});