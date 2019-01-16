function onChange(control, oldValue, newValue, isLoading, isTemplate) {
  if (
    newValue == '' ||
    (isLoading && newValue == null) ||
    (!isLoading && newValue == oldValue)
  ) {
    return;
  }

  if (!isLoading && newValue != oldValue) {
    g_form.setValue('u_caller_authenticated', false);
  }

  var authenticated = g_form.getValue('u_caller_authenticated');

  if (authenticated == 'false') {
    alert('You must authenticate the caller before proceeding');
    g_form.flash('u_service_call.u_caller_authenticated', '#FFFACD', 0);
    g_form.showFieldMsg('u_caller', 'Authenticate this caller', 'info');
    //confirm ("You must authenticate the caller before proceeding.  Have you authenticated this user?");
    //if (answer == true) {
    // g_form.setValue('u_caller_authenticated', 'true');
    //return false;
    //}
  } else {
    g_form.hideFieldMsg('u_caller');
  }
}
