// This script populates the Account Level select box with the accounts specific to the application selected in the
// Enterprise App select box.
function onChange(control, oldValue, newValue, isLoading) {
  g_form.clearOptions('access_level'); //Used to clear options between changes
  var enterprise_app = g_form.getValue('Enterprise_App'); //Gets the value of the Enterprise App selection from the request form, will be used to query server side and is passed though addParam
  // used for debugging to see what value is in Enterprise_App select box
  // alert(enterprise_app);

  var ga = new GlideAjax('GetAccounts'); //Creates a GlideAjax- 'GetAccounts' MUST be the corresponding Script Include
  //Add parameters GlideAjax variable to pass back to the server
  ga.addParam('sysparm_name', 'getAccounts'); //must add a sysparm_name and have that match the Function inside the script include
  ga.addParam('sysparm_account', enterprise_app); // to add additional information you want to access from the form server side use addParam('sysparm_name', yourVariable)
  ga.getXML(GetAllAccounts); //Once finished adding parameters use getXML and call a function that will be made below
  function GetAllAccounts(response) {
    //User defined function that is previously called with getXML and will receive a response from the server
    var answer = response.responseXML.documentElement.getAttribute('answer'); //retrieves response from the servers and makes it usable (string)
    var accts = answer.split(',');
    //alert(answer);(Was used to help debug, will throw up a message containing the contents of a variable)
    g_form.addOption('access_level', '', ''); //creates a starting option for Account
    for (i = 0; i < accts.length; i++) {
      //For loop that goes through the array
      g_form.addOption('access_level', accts[i], accts[i]); //Adds options to Account Level choice list from selecting strings from the labs array
    } //End for
  } // End of GetAllAccounts function
} // End of onChange function
