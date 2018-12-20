// Right-Click on top bar of form | Personalize | UI Actions | New
// Enter Name, Table, select Form Button and List Choice
Condition = current.assigned_to == gs.getUserID();
Script = current.u_project_intake_status = 'Assignment Confirmed';
current.update();
action.setRedirectURL(current);
