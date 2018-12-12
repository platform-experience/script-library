// Retire parent
var parent = new GlideRecord('kb_knowledge');
parent.addQuery('sys_id', current.u_parent);
parent.query();
while (parent.next()) {
   parent.workflow_state = 'retired';
   parent.retired = gs.nowDateTime();
   parent.update ();
}

// publish current version
current.workflow_state = 'published';
current.published = gs.nowDateTime();
gs.addInfoMessage('New revision published.  Previous version retired');
current.update();
