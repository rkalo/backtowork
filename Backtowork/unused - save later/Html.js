class Html {
	constructor(yourTag){
			return document.createElement(yourTag);
	}

	set setClasses(str) { this.classList = str;}
	get setId { return this.id; }
	set setId (str) {this.id = str};

}

/* class Input {
 	constructor(type=""){
 		return = type ? document.createElement(type) : document.createElement("input"),
 }
}

class Image {
	constructor(srcStr){
			let img = document.createElement("img");
			srcStr.includes("placeholder") ? img.src = `https://placehold.co/${srcStr}` : img.src = srcStr;
			return img; 
	}
}
*/