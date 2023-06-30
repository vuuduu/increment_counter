// When button increment btn is clicked
// Increase the count-element
// when save btn is clicked 
// display the increment in the value paragraph and reset the count

let count = 0;
let displayEl = document.getElementById("increment-display");
let countEl = document.getElementById("count-element");

// Take the count variable > increment it > and display it
function increment() {
    count++;
    countEl.textContent = count;
}

// save count to display-element > reset count
function save() {
    let saveEl = count + " - ";
    displayEl.textContent += saveEl;
    count = 0;
}