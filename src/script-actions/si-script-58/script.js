How to create an event and update a field on a record for a document that has been attached either via the paperclip or through an inbound email action.  Simply creating a business rule on your task table with the hasAttachment == true condition will not work because adding an attachment does not force an update to the table in question.  It only updates the sys_attachment table and creates a relationship to your task table.  Though you might be able to create a business rule on the sys_attachment table and use the sys_parameters like we do below to update the associated record on your task table.

Prerequsite: create a u_documentation_uploaded true/false field on your table.

The sys_attachement table lists a Table name and Table Sys ID for each attachment uploaded.  The Table Sys ID is the sys_id of the record on the table.

Step 1:  Register an event


Step 2: Create a business rule to trigger the event.

gs.eventQueue("hr.attachement", current, current.table_sys_id, current.sys_id);

Note: Sometimes it takes 10 seconds or so before the rule runs, so be patient.

Step 3: Create a Script Action to update the flag on your record when the event is triggered.  The event.parm1 is the sys_id of the record.

gs.log('*** we made it into the script action');
var ua = new GlideRecord('hr');
ua.get(event.parm1);
ua.u_documentation_uploaded = true;
gs.log('*** ' + event.parm1);
ua.update();
