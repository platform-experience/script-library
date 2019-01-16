function onChange(control, oldValue, newValue, isLoading) {
  /*
Purpose:  Populate a field on a form based on a field value that is on a reference field value.
Example Detais:  This script is applied to the 'JavaScript Example' Catalog Item and updates the suggested_title field based on the record selected for position
Used in: This Client script can be used for forms or Service Catalog
*/

  if (isLoading || newValue == '') {
    //Clear suggested_title field.  This allows to clear a value if a user enters a position and then removes it from the position field
    g_form.setValue('suggested_title', '');
  }

  //Set variable to contain a reference field then execute function
  var position_record = g_form.getReference('position', positionInfo);

  function positionInfo(position_record) {
    //Set value to a field of the reference field
    g_form.setValue('suggested_title', position_record.title);
  }
}
