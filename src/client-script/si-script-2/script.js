function onChange(control, oldValue, newValue, isLoading, isTemplate) {
  /*
Purpose:  This client script will prevent a user from selecting a "due date" that is in the past.  Upon selecting a date in the past, an error message will appear below the due date field, and the due date field will clear.
Example Detais:  When entering a due_date field that is in the future, an error message will be displayed and date will be removed
Used in: This Client script can be used for forms or Service Catalog
*/
  if (isLoading || newValue === '') {
    return;
  }
  //get start date
  var start = g_form.getValue('due_date');
  //get Date object using user's display format
  var dt = getDateFromFormat(start, g_user_date_time_format);
  var rightNow = new Date();
  if (dt < rightNow) {
    g_form.clearValue('due_date');
    g_form.showFieldMsg('due_date', 'Due date must be in the future.', 'error');
  }
}
