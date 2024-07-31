const doc = { // doc.getCount()
		get:(str) => document.getElementById(str),
		set: { 
			input:	{ value: (inputElem, value) => {inputElem.value = value;},
		countb: (str) =>  {document.querySelectorAll(queryStr).length},
		log: (input) => { 
			if (typeof(input)=== "Object"){
				input.getOwnPropertyNames.forEach( (name) => {
		            console.log(`${input.name}.${name} is: ${input[name]}`); } ) 
				} else {
					console.log(input);
				}	}//end brace of doc declaration
			

					}}}				//fN: (fnStr, varStr) => 
				//{ console.log(`f(N): ${fnStr.name}(${varStr.toStringLocale()})${fnStr(varStr)}`)}
			 //end of log.val methods  } //end of doc object declaration;s
/*
const str = {
	zeroPrefix: (numInput) => numInput < 10 ? `0${numInput}` : numInput
	//isPalindrome(): 
}//end str object declaration
*/



