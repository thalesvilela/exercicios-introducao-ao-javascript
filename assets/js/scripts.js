var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber +1;
    currentNumberWrapper.innerHTML = currentNumber;
    refreshColor();
}

function decrement(){
    currentNumber = currentNumber -1;
    currentNumberWrapper.innerHTML = currentNumber;
    refreshColor();
}

function refreshColor(){
    if(currentNumber < 0){
        currentNumberWrapper.style.color = 'red';
    } else{
        currentNumberWrapper.style.color = 'black';
    }
}