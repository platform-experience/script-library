//Need to add verification to confirm record has been saved
//gs.info('My sys_id is '+current.sys_id);
//current.insert();
var newrecord = new GlideRecord('x_snc_servicenow_s_building_access_approval');
newrecord.scripting_record = current.sys_id;

var sysID = newrecord.insert();

gs.addInfoMessage('A new record ' + newrecord.number + " was created");
//action.setRedirectURL(newrecord);
//setRedirect() sets the next page that the user will see
action.setRedirectURL(current);
//setReturn() sets what page the user will return to after they submit or hit Back on the next page they see.
action.setReturnURL(current);
