document.addEventListener("DOMContentLoaded", function(event) {
	let body = document.querySelector('body');
	let result = document.querySelector('#result');

	let clear = document.querySelector('#clear');
	let history = document.querySelector('#history');
	let equalTo = document.querySelector('#equalTo');
	let delete_num = document.querySelector('#delete_num');

	let val_btn = document.querySelectorAll('#val_btn');

	// Listeners for all buttons to enter their value
	val_btn.forEach((val_btn, index)=>{
		val_btn.addEventListener('click', function(){
			let text = this.innerHTML;
			result.innerHTML += text;
		});
	});

	// Listener for = button
	equalTo.addEventListener('click', function(){
		if (result.innerHTML != "") {
			transmit(result.innerHTML)
		} else {
			alert('Please enter a number first');
		}
	});

	// Clear all numbers
	clear.addEventListener('click', function(){
		result.innerHTML = "";
	});

	// Delete a single number
	delete_num.addEventListener('click', function(){
		result.innerHTML = result.innerHTML.substring(0,result.innerHTML.length-1);
	});

});