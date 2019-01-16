function onChange(control, oldValue, newValue, isLoading, isTemplate) {
  /*
	Purpose:  Validate a string
	Example Detais:  When entering a string, the script will confirm it matches the desired pattern and only allow strings with the proper format
	Used in: Service Catalog or any forms
 	*/
  if (isLoading || newValue == '') {
    return;
  }
  //set value of field in variable
  var str = g_form.getValue('account_number');
  //var str = newValue;

  //Create a variable for each character and 1 extra
  //In this case we expect an account number to be 8 characters
  var res1 = str.charAt(0);
  var res2 = str.charAt(1);
  var res3 = str.charAt(2);
  var res4 = str.charAt(3);
  var res5 = str.charAt(4);
  var res6 = str.charAt(5);
  var res7 = str.charAt(6);
  var res8 = str.charAt(7);
  var res9 = str.charAt(8);

  //If the values match the desired format then do nothing
  if (res1 == 'T' && res2 == '2' && res5 == 'T' && res8 != '' && res9 == '') {
  }

  //If the values do not match the desired format
  else {
    //Show error message
    alert('Enter a Proper Name of with format T2**T***');
    //Clear incorrect value
    g_form.setValue('account_number', '');
  }
}
