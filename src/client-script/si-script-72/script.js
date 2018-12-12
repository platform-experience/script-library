function onChange(control, oldValue, newValue, isLoading, isTemplate) {
	if (isLoading || newValue == '') {
		return;
	}
	//Type appropriate comment here, and begin script below 
	var ciobj = g_form.getReference('cmdb_ci');
	if(ciobj.sys_class_name == 'cmdb_ci_ip_phone'){
		g_form.setValue('u_phone', true);
	} else{
		g_form.setValue('u_phone', false);
	}
}
