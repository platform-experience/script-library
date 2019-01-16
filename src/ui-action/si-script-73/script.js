// This makes a duplicate article in the 'draft' state

var newRevision = current;
newRevision.workflow_state = 'draft';
newRevision.u_summary_of_revisions = '';
newRevision.published = '';
newRevision.u_parent = current.sys_id;
newRevision.u_version++;
newRevision.insert();

//gs.addInfoMessage("Revision generated");

action.setRedirectURL(newRevision);
