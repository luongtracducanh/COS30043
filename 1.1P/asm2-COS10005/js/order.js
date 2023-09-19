// JavaScript Document
function validate() {
	var contact = document.getElementById("contact").value;
	var email = document.getElementById("email").value;
	var creditnumber = document.getElementById("creditnumber").value;
	var deli = document.getElementById("deli").checked;
	var pickup = document.getElementById("pickup").checked;
	var paypickup = document.getElementById("paypickup").checked;
	var payonline = document.getElementById("payonline").checked;
	var errMsg = "";
	var result = true;

	if ((deli == "") && (pickup == "")) {
		errMsg += "An order type must be selected.\n";
	}
	if (contact == "") {
		errMsg += "Contact number cannot be empty.\n";
	}
	if (email == "") {
		errMsg += "Email cannot be empty.\n";
	}
	if ((paypickup == "") && (payonline == "")) {
		errMsg += "A payment method must be selected.\n";
	}
	if ((document.getElementById("visa").checked) && (creditnumber.length != 16)) {
		errMsg += "Visa card number has to be 16-digit.\n";
	}
	if ((document.getElementById("master").checked) && (creditnumber.length != 16)) {
		errMsg += "Mastercard number has to be 16-digit.\n";
	}
	if ((document.getElementById("american").checked) && (creditnumber.length != 15)) {
		errMsg += "American Express card number has to be 15-digit.\n";
	}
	if (errMsg != "") {
		alert(errMsg);
		result = false;
	}
	return result;
}

function init() {
	var regForm = document.getElementById("regform");
	regForm.onsubmit = validate;
}
window.onload = init;

function addressFunction() {
	if (document.getElementById("same").checked) {
		document.getElementById("billadd").value = document.getElementById("deliadd").value;
	}
	else {
		document.getElementById("billadd").value = "";
	}
}
window.onchange = addressFunction;

function yesnoCheck() {
	if (document.getElementById('deli').checked) {
		document.getElementById('ifYes').style.visibility = 'visible';
	}
	else document.getElementById('ifYes').style.visibility = 'hidden';
}

function yesCheck() {
	if (document.getElementById('payonline').checked) {
		document.getElementById('ifyeah').style.visibility = 'visible';
	}
	else document.getElementById('ifyeah').style.visibility = 'hidden';
}

function copy(event) {
	var deliadd = document.getElementById("deliadd");
	var billadd = document.getElementById("billadd");
	var checked = document.getElementById("same").checked;
	if (checked) {
		if (deliadd.value) {
			billadd.value = deliadd.value;
		}
		else {
			alert('Please enter your delivery address first.');
			event.preventDefault();
		}

	}
}

window.onchange = yesnoCheck();
window.onchange = yesCheck();
window.onchange = copy();