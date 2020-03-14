let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
let myImage = document.querySelector('img');
myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if (mySrc === 'Images/20190804_164509.jpg'){
		myImage.setAttribute ('src','Images/20190804_164437.jpg');
	}else{
		myImage.setAttribute ('src','Images/20190804_164509.jpg');
		}	
	}
function setUserName(){
	let myName = prompt('Please enter your name');
	if(!myName || myName === null) {
		setUserName();
	}else{
		localStorage.setItem('name', myName);
		myHeading.textContent = 'Mozilla is cool, ' + myName;
	}
}
if (!localStorage.getItem('name')){
	setUserName();
}else{
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozzila is cool, '+ storedName;
}
myButton.onclick = function() {
	setUserName();
}

