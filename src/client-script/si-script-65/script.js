Note – I set this on TimeCard too and did it OnLoad as well as OnChange.
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
   if (isLoading) {
      return;
   }

   var assigned = g_form.getReference('assigned_to');

    if (newValue == '') {
       g_form.setValue('u_dba_tier', "");
	   alert('The assigned to is blank');
	}
    else {
       g_form.setValue('u_dba_tier', assigned.u_dba_tier);
	}
      return;

}
