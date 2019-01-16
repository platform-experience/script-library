function onChange(control, oldValue, newValue, isLoading, isTemplate) {
  //CLIENT SCRIPT
  /*
Purpose:  Search a table based on a variable provided by a client script.  This is required because it is part of a scope application.  This requires a Client Script and a Script Include.
Example Detais:  Searches a building request table to see if a request has already been submitted
Used in: This Client script can be used for forms or Service Catalog
*/

  if (isLoading || newValue === '') {
    return;
  }

  //Do GlideAjax call to search a different table to confirm if record already exist
  //You must create a Script Include to search the table which in this case is PassCodeAJAX
  var ga = new GlideAjax('PassCodeAJAX');
  ga.addParam('sysparm_name', 'checkExisting');
  ga.addParam('sysparm_req_for', newValue);
  ga.getXML(checkExistingResponse);

  function checkExistingResponse(response) {
    //set response received by Glide Ajax in answer variable
    var answer = response.responseXML.documentElement.getAttribute('answer');

    //if the answer is not none, then a record already exist and show message
    if (answer != 'none') {
      g_form.showFieldMsg(
        'u_building_access_approval_request',
        'A record already exist for this building',
        'error'
      );
      //if the answer is none then do nothing
    } else {
      g_form.hideFieldMsg('u_building_access_approval_request', true);
    }
  }
}
