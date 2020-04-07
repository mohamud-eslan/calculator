let counter = document.querySelector('.counter');
const addCount = document.querySelector('#addCountBtn');
const lowerCount = document.querySelector('#lowerCountBtn');


let count = 0;


 addCount.addEventListener('click', incrementCounter);
lowerCount.addEventListener('click',decrementCounter);


function incrementCounter(){
    count++;
    counter.innerHTML = count;
}
function decrementCounter(){
    count--;
    counter.innerHTML = count;
    if(counter.innerHTML>'0'){
        counter.style.color = '#4caf50'
    }
}