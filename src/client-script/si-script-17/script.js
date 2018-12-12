function onChange(control, oldValue, newValue, isLoading) {
	/*
	Purpose:  This client script will prevent a user from selecting an "end date" that is before a "start Date".  Upon selecting a date in the past, an error message will appear below the due date field, and the due date field will clear.
	Example Detais:  Enter an end date that is before a start date, an error message will be displayed
	Used in: This Client script can be used for forms or Service Catalog
 	*/
	if (isLoading || newValue == '') {
		return;
	}
	//Hide message under end_date field
	g_form.hideFieldMsg('end_date', true);

	//If the start_date is not empty
	if (g_form.getValue('start_date') != '') {
		//If the end date is before the start date
		if (g_form.getValue('end_date') < g_form.getValue('start_date')) {
			//Display error message
			g_form.showFieldMsg('end_date', getMessage('End date cannot be before the selected users start date.'), 'info');
		}
	}
}