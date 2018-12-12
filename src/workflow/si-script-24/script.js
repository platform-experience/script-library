workflow.scratchpad.dc = "10.1.33.50";

//set naming conventions
var display_name = workflow.inputs.u_lastname + ", " + workflow.inputs.u_firstname;
var logon_name = workflow.inputs.u_firstname + "." + workflow.inputs.u_lastname;
var userPrincipalName = logon_name + "@twtelecom.com";

// EH - Modification - Put userPrincipalName into workflow scratchpad
workflow.scratchpad.email = userPrincipalName;

//Sets the CN_Name that will appear in Active Directory list
//This will also be used as the Username input for Create AD User Account RBA activity
workflow.scratchpad.CN_Name = logon_name;

//Construct the JSON for user variables
var user = {};
user.givenName = String(workflow.inputs.u_firstname);
user.SN = String(workflow.inputs.u_lastname);
user.DisplayName = display_name;
user.sAMAccountName = logon_name;
user.userPrincipalName = userPrincipalName;
user.mail = userPrincipalName;
user.company = "TW Telecom";
user.description = "Added through ServiceNow";
user.wWWHomePage = "www.twtelecom.com";

//Handle optional fields

//Handle optional fields
if(workflow.inputs.u_department)
	user.department = String(workflow.inputs.u_department);

if(workflow.inputs.u_title)
	user.title = String(workflow.inputs.u_title);

if(workflow.inputs.u_office.name){
	user.PhysicalDeliveryOfficeName = String(workflow.inputs.u_office.name);}

if(workflow.inputs.u_phone){
	user.telephoneNumber = String(workflow.inputs.u_phone);}

//We changed this one to be in line with the qualified naming structure used by TW Telecom

if(workflow.inputs.u_manager.user_name){
   //user.Manager = "CN=" + workflow.inputs.u_manager.user_name + ",OU=Time Warner Telecom,DC=twtelecom,DC=com";}
   user.Manager = "CN=" + workflow.inputs.u_manager.user_name + ",OU=Time Warner Telecom,DC=ad,DC=twtelecom,DC=com";
}

// EH - Modification - Put userPrincipalName into workflow scratchpad
//workflow.scratchpad.user_manager = user.Manager;

//Set Address
if(workflow.inputs.u_office){
   if(workflow.inputs.u_office.street)
		user.streetAddress = String(workflow.inputs.u_office.street);
   if(workflow.inputs.u_office.city)
		user.l =  String(workflow.inputs.u_office.city);
   if(workflow.inputs.u_office.state)
		user.st = String(workflow.inputs.u_office.state);
   if(workflow.inputs.u_office.zip)
		user.postalCode = String(workflow.inputs.u_office.zip);
}

//Set Country
user.co = "United States";
user.c = "US";
user.countryCode = "840";

//Encode JSON and set User Data input variable for Create AD User Account
workflow.scratchpad.userdata = new JSON().encode(user);
workflow.debug('user data JSON: '+ workflow.scratchpad.userdata);

//setup groups
if(workflow.inputs.u_group){
   workflow.scratchpad.processgroups = true;
   var str = workflow.inputs.u_group.toString();
   var arr = str.split(",");
   workflow.info("Groups ARE " + workflow.inputs.u_group);
   workflow.info("length is " + arr.length);
   var desc = [];
   for(var i=0; i < arr.length; i++){ //str holds sys_id, so need to find name
   	var grp = new GlideRecord('sys_user_group');
   	workflow.info("Array pos: " + arr[i]);
   	grp.get(arr[i]);
   	desc.push(grp.name);
   	workflow.info("group: " + desc[i]);
	}

	workflow.scratchpad.groups = desc.join(',');
	workflow.debug(desc);
}
else
   workflow.scratchpad.processgroups = false;
