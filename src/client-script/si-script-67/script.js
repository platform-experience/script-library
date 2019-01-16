function onChange(control, oldValue, newValue, isTemplate) {
  if (newValue != '') {
    var date = g_form.getValue('u_demo_date').toString();
    var short_date = date.substr(0, 10);
    alert(short_date);

    //Type appropriate comment here, and begin script below
    if (short_date == '2013-01-08') {
      g_form.removeOption('u_options', 'Hemmer to Shadow Remotely');
      g_form.setValue('u_options', 'Another SC to Shadow Remotely');
    } else {
      //g_form.addOption('u_options', 'Hemmer to Shadow Remotely', 'Hemmer to Shadow Remotely', 1);
    }
  }
}
