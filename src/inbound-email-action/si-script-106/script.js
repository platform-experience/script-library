//	Note: current.opened_by is already set to the first UserID that matches the From: email address

current.opened_for = gs.getUserID();
current.comments =
  'received from: ' + email.origemail + '\n\n' + email.body_text;
current.short_description = email.subject;

//current.category = "request";
//current.incident_state = 1;
//current.notify = 2;
current.contact_type = 'email';
current.description = email.body_text;

if (email.body.assign != undefined) current.assigned_to = email.body.assign;

if (email.importance != undefined) {
  if (email.importance == 'High') current.priority = 1;
}

if (email.body.priority != undefined) current.priority = email.body.priority;

current.insert();
