let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');
let myImage = document.querySelector('img');

if (!localStorage.getItem('name')) {
    setAuthorName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'di ' + storedName;
    myHeading.style.display = 'block';
}

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/caserta.jpg') {
	myImage.setAttribute('src', 'images/caserta-1.jpg');
    } else {
	myImage.setAttribute('src', 'images/caserta.jpg');
    }
}

function setAuthorName() {
    let myName = prompt("Inserire il nome dell'autore.");
    if (!myName) {
	setAuthorName();
    } else {
	localStorage.setItem('name', myName);
	myHeading.textContent = 'di ' + myName;
	myHeading.style.display = 'block';
    }
}

myButton.onclick = function() {
    setAuthorName();
}
