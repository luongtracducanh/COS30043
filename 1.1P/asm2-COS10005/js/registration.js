// JavaScript Document
function validate() {
	var uname = document.getElementById("uname").value;
	var pwd1 = document.getElementById("pwd1").value;
	var pwd2 = document.getElementById("pwd2").value;
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var postcode = document.getElementById("postcode").value;
	var genm = document.getElementById("genm").checked;
	var genf = document.getElementById("genf").checked;
	var taco1 = document.getElementById("taco1").checked;
	var taco2 = document.getElementById("taco2").checked;
	var taco3 = document.getElementById("taco3").checked;
	var errMsg = "";
	var result = true;
	var pattern = /^[a-zA-Z ]+$/;

	if (uname == "") {
		errMsg += "Username cannot be empty.\n";
	}
	if (pwd1.length < 8) {
		errMsg += "Password has to be at least 8 characters long.\n";
	}
	if (pwd2 == "") {
		errMsg += "Retype Password cannot be empty.\n";
	}
	if (pwd1 != pwd2) {
		errMsg += "Passwords do not match.\n";
	}
	if (email == "") {
		errMsg += "Email cannot be empty.\n";
	}
	if (!postcode.match(/^(?=.*\d).{4}$/)) {
		errMsg += "Postcode has to be 4-digit.\n";
	}
	if (name == "") {
		errMsg += "Client's name cannot be empty.\n";
	}
	if (!name.match(pattern)) {
		errMsg += "Client's name contains symbols.\n";
	}
	if ((genm == "") && (genf == "")) {
		errMsg += "A gender must be selected.\n";
	}
	if ((taco1 == "") && (taco2 == "") && (taco3 == "")) {
		errMsg += "You have to choose at least 1 type of taco.\n";
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