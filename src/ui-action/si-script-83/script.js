function setIncType(){
   //Set the 'Incident state' and 'State' values to 'Resolved', and display mandatory fields
   //g_form.setValue('incident_state', 6);
   g_form.setValue('u_incident_type',3);
   g_form.setValue('u_priority_score',100);
   alert('This is a MAJOR incident!  Notifications being sent..');

}

//Code that runs without 'onclick'
//Ensure call to server-side function with no browser errors
if (typeof window == 'undefined')
   serverIncType();

function serverIncType(){
   //current.incident_state = 6;
   g_form.setValue('u_incident_type',3);
   current.update();
}

action.setRedirectURL(current);
