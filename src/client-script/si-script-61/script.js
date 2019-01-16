function onChange(control, oldValue, newValue, isLoading, isTemplate) {
  if (isLoading || newValue == '') {
    return;
  }

  //Type appropriate comment here, and begin script below
  var user = g_form.getReference('caller_id');
  g_form.setValue('u_affected_employee', user.sys_id);
}
