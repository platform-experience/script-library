var unique_num = gs.nowDateTime();
createCI();

function createCI() {
  var ci = new GlideRecord('u_cmdb_ci_cage');
  ci.name = 'New Cross Connect-' + unique_num;
  ci.insert();
  // var id = ci.insert();
  // workflow.scratchpad.ci_id = id;
  // use the commented code to return the sys_id of the new record to create // relations on the cmdb_rel_ci table between the new cross connect and the // cages automaticially
}
