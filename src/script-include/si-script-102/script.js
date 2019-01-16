// Called From: Populate the Access Level Box

// **Notes Name must match Client Script where you great a new GlideAjax. Also Client callable needs to be checked.
// gs.log("Inside the function YYYY"); // (Use gs.log to help debug by printing messages to the Script Logs)

var GetAccounts = Class.create(); //Start by creating a variable Class
GetAccounts.prototype = Object.extendsObject(AbstractAjaxProcessor, {
  //Have that variable extend AbstractAjaxProcessor
  getAccounts: function() {
    //This start function needs to match the Client Script sysparm_name declaration
    var enterprise_app = this.getParameter('sysparm_account'); //Use this.getParamter('sysparm_') to retrieve the information you declared on the client

    // gs.log("Enterprise App: "+enterprise_app);

    var acct = []; //acct is an array
    var target = new GlideRecord('u_appl_avail_roles'); // Very similar to a GlideRecord
    target.addQuery('u_enterprise_app', enterprise_app); //Searches my table for only results with a matching location
    // target.groupBy('u_role'); Groups the results to only return unique results
    target.query(); //Runs the query

    while (target.next()) {
      //Cycles through the query results

      //gs.log("inside the while loop");
      //gs.log("u_role"+target.u_role);
      //gs.log("to string u_role"+target.u_role.toString());
      //gs.log("universal table u_name"+target.u_role.u_name);

      acct.push(target.u_role.u_name); //adds each record to the array
    } //ends while target
    return acct.toString(); //converts the array to a string before returning it to the client
  }, //ends getAccount Function
}); //ends the extendsObject variables
