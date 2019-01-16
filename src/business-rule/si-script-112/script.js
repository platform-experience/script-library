(function executeRule(current, previous /*null when async*/) {
  /*  To make this more robust query the sys_attachment table for the attachment.
There are 2 fields
to query on that table for a match, table and SysID that will match the record that
has the attachment. You can also query for an attachment name etc too.
  */
  //Demonstrate that any field on a record can be update by automation
  //gs.setReturn (previous.getLink(true));
  current.work_notes.setDisplayValue(
    'Work notes added by Release progression gate business rule'
  );
  gq = new GlideRecord('sys_attachment');
  gq.addQuery('table_sys_id', current.sys_id);
  gq.addQuery('file_name', 'STARTSWITH', 'BRD');
  gq.query();
  if (gq.next()) {
    gs.addInfoMessage('We found an BRD attachment for the current record');
  } else {
    //gs.setRedirect(current);
    gs.addInfoMessage('We did not find an attachment for the current record');
    current.setAbortAction(true);
  }
  //gs.setReturn (previous.getLink(true));
  action.setRedirectURL(current);
})(current, previous);
