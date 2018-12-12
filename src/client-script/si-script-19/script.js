function onChange(control, oldValue, newValue, isLoading, isTemplate) {
/*
Purpose:  Takes value from one field and saves same value all in lower case to a different
Example Detais:  User enters email address which is then saved in email_address_lower_case in a different field
Used in: This Client script can be used for forms or Service Catalog
*/
	if (isLoading || newValue === '') {
		return;
	}
	//get value of email_address field and set to lower case
	var email = g_form.getValue('email_address').toLowerCase();
	//set lower case value to new field
	g_form.setValue('email_address_lower_case', email);
}