function onChange(control, oldValue, newValue, isLoading) {
  if (!newValue || newValue == '') {
    g_form.setDisplay('u_group', false);
    return;
  }

  u_groupg_filter.reset();
  u_groupg_filter.setQuery('u_department=' + newValue);
  u_groupacRequest(null);
  g_form.setDisplay('u_group', true);
}
