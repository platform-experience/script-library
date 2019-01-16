function onSubmit() {
  /*
Purpose:  Display a pop up message which requires user to click OK to proceed
Example Detais:  A pop up message requires user to click OK before proceeding to Save, Update or Submit the form
Used in: This Client script can be used for forms or Service Catalog
*/
  //Display message which request users to confirm.  The getMessage is used to provide ability to display the message in different languages based on entries in sys_ui_message table.
  return confirm(
    getMessage('You are about to submit this record.  Click OK to continue.')
  );
}
