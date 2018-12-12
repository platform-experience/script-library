Condition: current.employment_start_date.changes() && current.employment_start_date < previous.employment_start_date

Script:
if (!current.employment_start_date.nil()) {

	gs.log('*** - EH - We made it into the business rule for Employee Profile');

    var gr = new GlideRecord ('hr_change');
    gr.addQuery('hr_profile',current.sys_id);
    gr.addQuery('category','onboarding');
    gr.query();

    while(gr.next()) {
    gr.due_date = current.employment_start_date;
    // Reassign to the HR Escalations Group
	gr.assignment_group = '541931d90f732100f48cf94be1050e61';
    gr.update();
    }

}

*** Augment this with a notifiction for the escalations group