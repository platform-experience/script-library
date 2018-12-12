function onChange(control, oldValue, newValue, isLoading, isTemplate) {
/*
Purpose:  Validate a string to be a valid email address
Example Detais:  Enter an email in the email address field
Used in: This Client script can be used for forms or Service Catalog
*/
	if (isLoading || newValue === '') {
		return;
	}
	//set value of email address in a variable
	var strEmail = g_form.getValue("email_address");
	//hide error message before validating string
	g_form.hideErrorBox("email_address");
	//if there are no values then do nothing
	if (strEmail === null || strEmail === "")
		return true;
	//if email is valid format do nothing
	if (isEmailValid(strEmail))
		return true;
	//if email is not valid format then display error message
	else{
		g_form.showErrorBox("email_address", "Invalid email address");
		return false;
	}
}