'use strict';

const selected = document.querySelectorAll('.item');
const submit = document.querySelector('.btn');
const firstContainer = document.querySelector('.container');
const SecondContainer = document.querySelector('.container-touch');
const span = document.querySelector('.card-touch span');

let num;


selected.forEach(item => item.addEventListener('click', function(e){
    selected.forEach((items) => {     
        items.classList.remove('checked');
    });

    e.target.classList.add('checked');

    num = e.target.textContent;
    span.textContent = `You selected ${num} out of 5`;

}));

//Submit Form
submit.addEventListener('click', function(){
    firstContainer.classList.add('hidden');
    SecondContainer.classList.remove('hidden');
})
