const doc = { // doc.getCount()
		get:(str) => document.getElementById(str),
	//	set: { value: (inputElem, value) => {inputElem[value] = value;}}, //end brace of doc.se
		countb: (str) =>  {document.querySelectorAll(queryStr).length},
		log: (input) => { 
			if (typeof(input)=== "Object"){
				input.getOwnPropertyNames.forEach( (name) => {
		            console.log(`${input.name}.${name} is: ${input[name]}`); } ) 
				} else {
					console.log(input);
				}	}//end brace of doc.log() declaration
				} //endbrace of 

class Timer {
	constructor(minutes, seconds) { //these presumably are going to be whole numbers
	    this.minutes = minutes
	    this.seconds = seconds
		this.startTime = Date.now(); //returnsSeconds
		this.timePassage = () => { 
		    let temp = new Date(); 
		    return temp.now() - this.startTime;  };}
	set secondPass(secondNum) { this.seconds-= secondNum;}
	set minutePass(minuteNum) { this.minutes-= minuteNum}
	get minutesStr() { this.minutes < 10 ? `0${this.minutes}`  : `${this.minutes}`  }
	get secondsStr() { if (this.seconds%60===0) {return `00`; } else if (this.seconds % 60 < 10) { return `0${this.seconds}`}else { return this.seconds.toString(); }}
	start() {

		const timer = setInterval( () => {
		secondPass(1);
		//put app logic here
		if(this.seconds === 0 && this.minutes > 0 )
			minutePass(1);
			//put app logic here
		if (this.seconds === 0 && this.minutes === 0) {
			//put app logic here
			clearInterval(timer);}}, 1000); } } //end startdeclaration 