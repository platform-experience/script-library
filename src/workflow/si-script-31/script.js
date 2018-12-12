Chris King and I were just working together to address an interesting use case. If a change request was created for a CI, the customer wanted to get approvals from ALL UPSTREAM CIs. That means that if a change will impact an AIX server we will need approvals for the Web app servers that rely on the AIX box, the load balancers that connect to the web app servers, the SAP applications (all of them) that depend on the load balancers and, of course, SAP Enterprise services which depends on all of the SAP Applications.
 
If you paste the following script into a Group Workflow Activity (after checking the "Advanced" button) it will gather all of those approvals. Bam.

var id = current.cmdb_ci.sys_id;
var answer = [];
findParent(id);
 
function findParent(ID) {
var cir = new GlideRecord('cmdb_rel_ci');
cir.addQuery('child', ID);
cir.query();
while (cir.next()){
var parent = cir.parent;
if (parent != '') {
//change_control is the approver_group field
answer.push(parent.change_control.sys_id);
//gs.log("Pushed " + parent.change_control.name + " to approval array");
parent = cir.parent;
findParent(parent);
}
}
}
