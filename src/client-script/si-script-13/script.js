function onChange(control, oldValue, newValue, isLoading, isTemplate) {
	/*
	Purpose:  Hide or display a field based on another field on the form
	Example Detais:  Set values of Hide Field to display or hide "Hide this field"
	Used in: Service Catalog or any forms
 	*/
	if (isLoading || newValue === '') {
		return;
	}
	if (g_form.getValue('hide_field') == 'Yes') {
		//hide field
		g_form.setDisplay('hide_this_field', false);
	}
	else {
		g_form.setDisplay('hide_this_field', true);
	}
}