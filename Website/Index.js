
let myButton = document.querySelector('button');
let myHeading = document.querySelector('hi');

function setUserName(){
    let myName = prompt('Please enter your name : ');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Kamu Ganteng ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
}