function helloSomeone(input){
	if (typeof(input) == "string"){
		if (input === ""){
			console.log("Who are you?");
		}
		else {
			console.log("Hello", input+"!");
		}
	}
	else if (typeof(input) == "undefined"){
		console.log("Nobody can define me!");

	}
	else if (input == null){
		console.log("I am null and void");
	}  
	else if (isNaN(input) == true){
		console.log("Age is just a number");

	}
	else if (typeof(input) == "number"){
		if (input < 0)
		{
			console.log("I am Benjamin Button!");
		}
		else
			console.log("My age is", input);
	}
	return;
}
export default helloSomeone
