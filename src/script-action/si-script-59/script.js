// Step 1: Inactivity Monitor

// Step 2: Event

// Step 3: Business Rule

// Step 4: Notification

// The Following Customer Requires a Customer Contact

// Click here to view Service Call: ${URI_REF}

// Number: ${number}
// Caller: ${u_caller}

// Customer description: ${short_description}

// Step 5: Script Action

gs.log('*** EH - we made it into the script action');
var sc = new GlideRecord('u_service_call');
if (sc.get(event.instance)) {
  sc.u_customer_contacted = false;
  sc.update();
}
//gs.log('*** EH' + event.parm1);

// NOTE:  The Event Instance is the sys_id of the task.
