function onChange(control, oldValue, newValue, isLoading, isTemplate) {
  if (isLoading || newValue === '') {
    return;
  }

  var rec = new GlideRecord('incident');
  rec.addQuery('cmdb_ci', g_form.getValue('cmdb_ci'));
  rec.query();
  if (rec.next()) {
    alert(rec.number);
  }
}
