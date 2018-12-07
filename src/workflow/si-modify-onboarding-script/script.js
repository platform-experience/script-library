//set up user record
var userIdCount = 0;
var createUser = false;
var firstName = workflow.inputs.u_firstname;
var lastName = workflow.inputs.u_lastname;
var origUserID = firstName + '.' + lastName;
var userID = origUserID.toLowerCase();


//grab next available User ID
while (!createUser){
   if (userIdCount &gt; 0){
	  userID = origUserID + userIdCount;
   }

   if (doesUserExist(userID)){
	  userIdCount++;
	  continue;
   }
   createUser = true;
}

//insert new user record
var gr = new GlideRecord('sys_user');
gr.initialize();
gr.first_name = firstName;
gr.last_name = lastName;
gr.user_name = userID;
gr.department = workflow.inputs.u_department;
gr.mobile_phone = workflow.inputs.u_phone;
gr.location = workflow.inputs.u_office;
gr.manager = workflow.inputs.u_manager;
gr.title = workflow.inputs.u_title;
gr.user_password.setDisplayValue("employee");
//gr.u_reset_pin = "1234";
gr.source = "ServiceNow Orchestration";
//gr.company = "b31eb751bd8941009de10472ee055d9e"; //ServiceNow
//gr.cost_center = "d9d0a971c0a80a641c20b13d99a48576"; //IT
gr.email = userID + '@twelecom.com';
gr.active = true;

// EH - Modification - Put user sys_id into workflow scratchpad
// ADD ad_logon and temp_password to sys_user table.  Add new_user to sc_req_item table
gr.u_ad_logon = workflow.scratchpad.CN_Name;
gr.u_temp_password = workflow.scratchpad.randompassword;

// BTY - Handle custom executive field
if (current.variables.is_executive == 'Yes')
   gr.u_executive = true;

var new_user_SysID = gr.insert();

//Update New User in current Sc_Req_Item with newly created user
current.u_new_user = new_user_SysID;
current.update();