const timeDisplay = document.querySelector(".time");
const dateDisplay = document.querySelector(".date");
const usernameInput = document.querySelector(".username");
const greeting = document.querySelector(".greeting");
const place = document.querySelector(".place");
const body = document.querySelector("body");
const credit = document.querySelector(".insta");

let curDate = new Date();
let month = curDate.getMonth();
let username = getCookie('username');


if(username){
	greeting.style.display = "inline-block";
	usernameInput.style.display = "none";
	greeting.innerHTML = `Hello <span class="stored-name">${username}</span>.` ;
}else {
	greeting.style.display = "none";
	usernameInput.style.display = "inline-block";
	greeting.innerHTML = "What's your Name?";
};

let url = "https://api.unsplash.com/photos/random/?client_id=1a02363e818413166f715ddaf484d2cb22791107472445d7d04da08e1be77a35&orientation=landscape&query=landscape";

$(.document).ready(function() {
	fetch(url)
		.then((resp) => resp.json()) 
	  	.then(function(data) {
	  	 	let photo = data.urls.regular;
	  	 	place.textContent = `Location: ${data.location.title}`;
	  	 	credit.textContent = `${data.user.instagram_username}`;
	  	 	credit.href = data.user.portfolio_url;
	  	 	body.style.backgroundImage = `url(${photo})`;
	    	console.log(data)
	    });
})




function addToCookie(e){
	if(e.which == 13){
		
		let value = e.target.value;
		console.log(value)
	    greeting.textContent = `Hello ${value}.`
    	usernameInput.style.display = "none";
		greeting.innerHTML = `Hello <span class="stored-name">${username}</span>.` ;
	    setCookie('username', value,365);
	    e.preventDefault()
	}
	

}



// Cookie Function
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}


function timeUpdater(){
	let hours = "";
	let mintues = "";
	if(curDate.getHours() < 10) {
		hours = ` 0${curDate.getHours()}`
	} else {
		hours = curDate.getHours();
	}
	if(curDate.getMinutes() < 10) {
		mintues = ` 0${curDate.getMinutes()}`
	} else {
		mintues = curDate.getMinutes();
	}
	

	timeDisplay.textContent = `${hours} : ${mintues}`;


};

function dateUpdater(){
	let day   = curDate.getDay();
	let date = "";
	switch(curDate.getDate() ){
	case 1:
		date = "1st"
		break;
	case 2:
		date = "2nd"
		break;
	case 3:
		date = "3rd"
		break;
	default:
		date = `${curDate.getDate()}th`	
	}

	switch(curDate.getDay() ){
	case 1:
		day = "Monday"
		break;
	case 2:
		day = "Tuesday"
		brea;
	case 3:
		day = "Wednesday"
		break;
	case 4:
		day = "Thursday"
		break;
	case 5:
		day = "Friday"
		break;
	case 6:
		day = "Saturday"
		break;
	case 7:
		day = "Sunday"
		break;
	};


	

	switch(curDate.getMonth() ){
		case 0: 
			month = "January"
			break;
		case 1:
			month = "February"
			break;
		case 2:
			month = "March"
			break;
		case 3:
			month = "April"
			break;
		case 4:
			month = "May"
			break;
		case 5:
			month = "June"
			break;
		case 6:
			month = "July"
			break;
		case 7:
			month = "August"
			break;
		case 8:
			month = "September"
			break;
		case 9:
			month = "October"
			break;
		case 10:
			month = "November"
			break;
		case 11:
			month = "Decemeber"
			break;
	}
		let year  = curDate.getFullYear();
		dateDisplay.textContent = `${day} ${date} of ${month} ${year}`;

};

setInterval(timeUpdater, 1000);
dateUpdater()

usernameInput.addEventListener("keypress", addToCookie);




