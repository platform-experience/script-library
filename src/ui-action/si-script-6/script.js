Check "Form Button"
Set "Condition" to "current.u_request_form_status == 'Waiting Mgmt Approval'  && current.u_requestor_name.manager == gs.getUserID()"
Set "Script" to :
current.u_request_form_status = 'Review/Work In Progress';
current.update();
