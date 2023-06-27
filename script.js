//Object Problem 3

/*
Create an object with three items in it, then write a JavaScript function 
that accepts an object and tells you the length 
(tells you how many items are in it) of the object.
*/

const aquemini = {
	
	artist: 'Outkast',
	year: 1998,
	label: 'LaFace',
}

//console.log(Object.values(aquemini));

function itemCounter(aquemini){
	let count = Object.keys(aquemini).length;
//varibale stores the number of keys in the object by using length method
	
	return count
}

console.log(itemCounter(aquemini))