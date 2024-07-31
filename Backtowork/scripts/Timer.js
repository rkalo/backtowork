const doc = { // doc.getCount()
		get:(elemStr, index = 0) => { 
			const grabbed = document.querySelectorAll(elemStr);
			if(typeof(grabbed) === "undefined" || grabbed === "null") { console.log(`This object is not able to be retrieved with doc.get():${elemStr}`); return false; }
			if(grabbed.length > 1 && index > 0){ return grabbed[index-1]; }
			else if(grabbed.length > 1 && index === 0){ return grabbed; }
			else { return grabbed[0]; } //the NodeList will have a length of 1 the absence 
		} ,	//	end of doc.get() declaration
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
	constructor(minutes = 0, seconds) { //these presumably are going to be whole numbers
	    this.minutes = minutes
	    this.seconds = seconds
		this.startTime = Date.now(); //returnsSeconds
		this.timePassage = () => { 
		    let temp = new Date(); 
		    return temp.now() - this.startTime;  }
		this.isRunning = false; 
		this.finishedRunning = false;
		    }//end constructor declaration

	//my understanding of getters & setters is that they aren't concerning business logic as much as I thought they are supposed to, but facilitating value changes & retrievals
	get isRunning(){ return this._isRunning }
	set isRunning(x){ return this._isRunning }
	get finishedRunning() { return this._finishedRunning}
	set finishedRunning(x) { return this._finishedRunning}
	get minutesStr() { this.minutes < 10 ? `0${this.minutes}`  : `${this.minutes}`  }
	get secondsStr() { if (this.seconds%60===0) {return `00`; } else if (this.seconds % 60 < 10) { return `0${this.seconds}`}else { return this.seconds.toString(); }}

	start() {

		this.isRunning = true;
		const timer = setInterval( () => {
			this.seconds--;
				doc.get("#inputSeconds").value = this.secondsStr;
		if(this.seconds === 0 && this.minutes > 0 )
			this.seconds = 59;
			this.minutes--;
			//put app logic here
				doc.get("#inputMinutes").value = this.minutesStr;
		if (this.seconds === 0 && this.minutes === 0) {
			this.isRunning=false;
			this.finishedRunning = true;
			this.startTime = 0; 
			//put app logic here
			alert("time");

			clearInterval(timer);}}, 1000); } //end of start() declaration
	
			} //end of Timer declaration 