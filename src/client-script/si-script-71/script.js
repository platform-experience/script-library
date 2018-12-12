1.	Create a reference to business service on your form
2.	Create the following client script (On CI Change)
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
   if (isLoading || newValue == '') {
      return;
   }

	var ciobj = g_form.getReference('cmdb_ci');

	if(ciobj.sys_class_name == 'cmdb_ci_server'){

		//alert('IT IS A Server');

        g_form.setValue('u_server', ciobj.sys_id);
		//g_form.setValue('u_computer', value_of_cmdb_ci);  //this also works
	}
    else{
		g_form.setValue('u_server', '');

		//alert('IT IS not A Server');
	}
}
