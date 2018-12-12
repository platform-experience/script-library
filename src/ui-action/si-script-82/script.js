var change = new GlideRecord("change_request");
change.short_description = current.short_description;
change.description = current.description;
change.category = "Software";
change.u_release = current.sys_id;

var sysID = change.insert();

//current.change_id = sysID;
//var mySysID = current.update();

gs.addInfoMessage("Change Request " + change.number + " created");
action.setRedirectURL(change);
action.setReturnURL(current);
