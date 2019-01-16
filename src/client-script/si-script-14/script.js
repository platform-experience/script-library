function onChange(control, oldValue, newValue, isLoading, isTemplate) {
  /*
	Purpose:  Hide or display a field based on another field on the form
	Example Detais:  Set values of Hide Field to display or hide "Hide this field"
	Used in: Service Catalog or any forms
 	*/
  if (isLoading || newValue === '') {
    return;
  }
  if (g_form.getValue('mandatory') == 'Yes') {
    //set field to mandatory
    g_form.setMandatory('mandatory_field', true);
  } else if (g_form.getValue('mandatory') == 'No') {
    //remove mandatory for field
    g_form.setMandatory('mandatory_field', false);
  }
}
