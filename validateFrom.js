/*
	Validate this form

	<form>
  		<input type="radio" id="type_person" name="type" value="person" checked/>
  		<input type="radio" id="type_company" name="type" value="company"/>
  		<input type="text" id="first_name" name="first_name" value="John"/>
  		<input type="text" id="last_name" name="last_name" value="Doe"/>
  		<input type="text" id="email" name="email" value="john@example.com"/>
  		<input type="text" id="company_name" name="company_name" value=""/>
  		<input type="text" id="phone" name="phone" value="234-567-890"/>
	</form>
*/

function validate() {
  var personMode = document.getElementById('type_person').checked;
  var companyMode = document.getElementById('type_company').checked;


	var firstName = document.getElementById('first_name').value;
	var lastName = document.getElementById('last_name').value;
	var email = document.getElementById('email').value;
	var companyName = document.getElementById('company_name').value;
	var phone = document.getElementById('phone').value;

  if (personMode) {
  	var emailRegex = /[A-Z, a-z, 0-9, .]{1,64}@[A-Z, a-z, 0-9, .]{1,64}/;
  	var emailValid = emailRegex.test(email)
  	return emailValid && firstName.length > 0 && lastName.length > 0;
  } else if (companyMode) {
  	var phoneValid = validatePhone(phone);
  	return phoneValid && companyName.length > 0;
  } else {
  	console.log("Please choose company or person");
  	return false;
  }

}

function validatePhone(phone) {
	var numCount = 0;
	for(var i = 0; i<phone.length; i++) {
		var c = phone[i];

		if (c === "-"){
			continue;
		} else if( !isNaN(parseInt(c, 10))) {
			numCount += 1;
		} else {
			return false;
		}
	}
	return numCount >= 6;
}
