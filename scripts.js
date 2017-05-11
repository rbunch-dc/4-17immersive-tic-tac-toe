// 1. CHECK - Set up Board. 
// 2. User should be able to click on a box and mark the square (with users mark)
// -- put an onclick directly on the square
// -- addeventlistener
// 3. If it's X turn, put X in, if it's O's turn, put O in
// -- keep track of who's turn it is
// 4. Now that we know who's turn it is, when markSquare gets called
// put their symbol in AND change who's turn it is
// 5. We need to check to see if someone won

//Initialize whosTurn at player 1 / x
var whosTurn = 1;

var squares = document.getElementsByClassName('square');
for(let i = 0; i < squares.length; i++){
	// console.log(squares[i]);
	squares[i].addEventListener('click', function(event){
		// console.log("User clicked on a square!")
		markSquare(this)
	});
}

// - Create a marksquare function
function markSquare(currentSquare){
	var squareResult = ""
	console.log(currentSquare.innerHTML)
	if((currentSquare.innerHTML == "X") || (currentSquare.innerHTML == "O")){
		// console.log("This square is taken")
		squareResult = "Sorry, this square is taken."
	}else if(whosTurn == 1){
		currentSquare.innerHTML = "X"
		whosTurn = 2;
	}else{
		currentSquare.innerHTML = "O"
		whosTurn = 1;
	}
	var messageElement = document.getElementById('message');	
	messageElement.innerHTML = squareResult;
}