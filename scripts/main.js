const isEmpty = str => !str.trim().length;

let myImg = document.querySelector('img');

myImg.onclick = function() {
    let mySrc = myImg.getAttribute('src');
    if(mySrc === 'images/wolf.jpg') {
        myImg.setAttribute('src', 'images/wolf2.jpg');
    }
    else {
        myImg.setAttribute('src', 'images/wolf.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
let myInput = document.querySelector('input');

function setUserName() {
    let name = prompt('Please enter your name.');
    if(!name) // no valid value
    {
        setUserName();
    } else {
    localStorage.setItem('name', name);
    myHeading.textContent = 'Hello Wolf Friend ' + name; 
    }
}

function setNameFromInput() {
    let name = myInput.value;
    localStorage.setItem('name', name);
    myHeading.textContent = 'Hello Wolf Friend ' + name;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    myHeading.textContent = 'Hello Wolf Friend ' + localStorage.getItem('name');
}

myButton.onclick = function() {
    if(myInput.value == null || isEmpty(myInput.value)) {
        setUserName();
    } else {
        setNameFromInput();
        myInput.value="";
    }
}