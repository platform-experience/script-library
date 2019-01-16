function onChange(control, oldValue, newValue, isLoading) {
  if (isLoading || newValue == '') {
    return;
  }

  var v_address = '';
  var v_street = '';
  var v_city = '';
  var v_state = '';
  var v_zip = '';

  var cust = g_form.getReference('customer');
  //alert("customer is "+ cust.name);

  v_street = cust.street.toString();
  v_city = cust.city.toString();
  v_state = cust.state.toString();
  v_zip = cust.zip.toString();

  v_address = v_street + '\n' + v_city + ', ' + v_state + ' ' + v_zip;

  g_form.setValue('address', v_address);
}
