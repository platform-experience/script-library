function onLoad() {
	/*
	Purpose:  Set field to logged in user
	Example Detais:  Create new record and see value for Submitted By
	Used in: This Client script can be used for forms or Service Catalog
 	*/

	//Set value of field to logged in user
	g_form.setValue('submitted_by', g_user.userID);
}