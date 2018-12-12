a.	Created a client script: Make WorkNote Reqd w Priority Lwr.  This script set the Work Notes to mandatory, set the Priority Lowered field to true, and posted a warning message
function onChange(control, oldValue, newValue) {
   if (oldValue > newValue) {
   // if ((oldValue == '1' || '2') && (newValue == '3' || '4' || '5')) {
        g_form.setMandatory('work_notes', false);
        g_form.setValue('u_priority_lowered', false);
        }

   else if (oldValue < newValue) {

    g_form.setMandatory('work_notes', true);
    g_form.setValue('u_priority_lowered', true);
    g_form.showErrorBox('u_priority_lowered', getMessage("When you lower the Priority, you must explain why in the Work Notes"));
    }

    else {
    }

return;
}
