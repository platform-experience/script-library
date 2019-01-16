function onChange(control, oldValue, newValue, isLoading) {
  g_form.hideAllFieldMsgs();

  if (newValue.toString() == g_form.getValue('cmdb_ci_cage2')) {
    g_form.showFieldMsg(
      'cmdb_ci_cage1',
      'You must choose a different cage than the one you have already selected.',
      'info'
    );
  } else {
    //    g_form.hideFieldMsg('cmdb_ci_cage2', false);
  }
}
