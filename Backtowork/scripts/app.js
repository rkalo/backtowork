//project log 
//52928
//restarted & started over project, relearned the basics of the setTiming functions and acheived the crux of the basic function
//also loaded my extension to Google Chrome for the first time and debugged the program through extension windows

//the next step needs to be things you set up before but never got to
//1) replacing the spans with input, that you disable after the the app starts
//establishing some kind of patterned alarm system, to continually remind somebody (i.e me) to stay on task


//the checkbox can't interfere with the passing time, it can only be a flag for whether it repeats 

/*const wantsToLoop = false;
<dialog>.showModal()
<dialog>.close();
for this to really hum
create two solutions, with the same business logic
for*/ 


// runApp = () => {
	//generate & start timer with the user's preferences, either default or preferential
	

	const startingMinutes = parseInt(document.getElementById("#inputMinutes").value);
	const startingSeconds = parseInt(document.getElementById("#inputSeconds").value);	//grab integer values from html table
	//They are span tags


doc.get("#submitButton").addEventListener("click", (e) =>{

	e.preventDefault();
	const startingMinutes = parseInt(document.getElementById("#inputMinutes").value);
	
	const timer = new Timer(startingMinutes,startingSeconds);
	
	timer.start();

	while(timer.isRunning){

		startingMinutes.disabled = true;
		startingSeconds.disabled = true;
		doc.get("#submitButton").disabled = true;
		
	}//
		//account for somebody clicking the click button again
	if(timer.finishedRunning) 
			startingMinutes.disabled = false;
			startingSeconds.disabled = false;
			startingMinutes.innertext == "00";
			startingSeconds.innerText == "00";//making sure the html values reset 
			timer = null;

});//end event listener


			/*if(wantsToLoop){

				runApp();
				
			}//while
			}//if
			} // end of runApp() declaration

doc.get("#submitButton").addEventListener("click", runApp);

/*

doc.get("#checkboxLoop").addEventListener("click", (e) =>{

	wantsToLoop ? wantsToLoop = false : wantsToLoop = true; //toggle value

	if(wants)

	}
*/
/*
})



	/*
	5/31/24 6:20pm PST - AHGAGAGAG i dont know what to do with my hands
	Got this motherfondler to work within the DOM!!!!!

	now I have to handle things Like, making sure it works a second time uponrestarts, 
		disabling the inputs so it can't be changed or stalled
		and that Radio button
		Pomodoro support
		eventually I'd like to have usage data available

	6/1/24 10:23 AM
	document.querySelectorAll returns a NodeList directly, that was one bug to spray
	*/

	//
