var change = new GlideRecord("change_request");
//change.short_description = "Reconfigure Switch Ports";

change.applyTemplate("Switch Port Config");
change.cmdb_ci = current.sys_id;

//change.priority = '2';
//change.assignment_group.setDisplayValue('Network');   //you have to do it this way because it's a reference field
//change.category = "Network";
//change.description = "[Submitter Instructions: Please specify the switch ports and VLANs here]";
var sysID = change.insert();

current.change_id = sysID;
var mySysID = current.update();

gs.addInfoMessage("Change Request " + change.number + " created");
action.setRedirectURL(change);
action.setReturnURL(current);
