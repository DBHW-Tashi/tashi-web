document.addEventListener("DOMContentLoaded", function(event) {
	let body = document.querySelector('body');
	let result = document.querySelector('#result');

	let clear = document.querySelector('#clear');
	let history = document.querySelector('#history');
	let equalTo = document.querySelector('#equalTo');
	let delete_num = document.querySelector('#delete_num');

	let val_btn = document.querySelectorAll('#val_btn');


	let initial_value = "";

	// Listeners for all buttons to enter their value
	val_btn.forEach((val_btn, index)=>{
		val_btn.addEventListener('click', function(){
			let text = this.innerHTML;
			initial_value += text;
			result.innerHTML = initial_value;
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
		initial_value = "";
	});

	// Delete a single number
	delete_num.addEventListener('click', function(){
		result.innerHTML = result.innerHTML.substring(0,result.innerHTML.length-1);
		initial_value = result.innerHTML;
	});

});