function onChange(control, oldValue, newValue, isLoading, isTemplate) {
/*
Purpose:  Display different type of messages on a form
Example Detais:  Displays 4 types of messages when the show_messages field is modified
Used in: This Client script can be used for forms or Service Catalog
*/
	if (isLoading || newValue === '') {
		return;
	}
	//Display a message in green under a field
	g_form.showFieldMsg('show_messages','Show Field Msg Info- You must assign a group before you can assign an individual','info');
	//Display a message in red under a field
	g_form.showFieldMsg('show_messages', 'Show Field Msg Error - Management Absentee Advice Form Required','error');
	//Display a pop up with OK button
	alert('Alert - There are major delays in the delivery of email');
	//Display a pop up with OK and cancel button
	confirm('Confirm - Please ensure to read the documentation and guidelines regarding job lead times, otherwise your form may be declined.');
}