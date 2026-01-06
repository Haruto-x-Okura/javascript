const counter = document.getElementById("counter");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const reset = document.getElementById("reset");

let count = 0;
increment.onclick = function(){
    count++;
    counter.textContent = count;
}
decrement.onclick = function(){
    count--;
    counter.textContent = count;
}
reset.onclick = function(){
    count = 0;
    counter.textContent = count;
}