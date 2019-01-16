Script: var sc_rqst = new GlideRecord('sc_request');
sc_rqst.short_description = current.short_description;
//sc_rqst.cmdb_ci = current.cmdb_ci;
sc_rqst.requested_for = current.caller_id;
//sc_rqst.priority = current.priority;
var sysID = sc_rqst.insert();

current.parent = sysID;

current.incident_state = 7;
current.close_notes = 'Incident converted to Request by agent';
current.close_code = 'Converted to Request';

var mySysID = current.update();

//gs.addInfoMessage("Request " + sc_rqst.number + " created");
action.setRedirectURL(sc_rqst);
action.setReturnURL(current);
