const timeDisplay = document.querySelector(".time");
const dateDisplay = document.querySelector(".date");
let curDate = new Date();



function timeUpdater(){
	let hours = "";
	let mintues = "";
	if(curDate.getHours() < 10) {
		hours = ` 0${curDate.getHours()}`
	} else {
		mintues = curDate.getHours();
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
		brea;
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
}


	
	let month = curDate.getMonth();
	let year  = curDate.getYear();
	dateDisplay.textContent = `${day} ${date} of ${month} ${year}`;

};

setInterval(timeUpdater, 1000);
dateUpdater()
