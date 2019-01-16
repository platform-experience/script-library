// NOTE:  There are some modifictions to the on-screem messages from the Wiki Script: http://wiki.servicenow.com/index.php?title=Assignment_Based_on_Workload_Script
var assignTo = getLowestUser();
gs.addInfoMessage('Auto-assigning to ' + assignTo.name);
current.assigned_to = assignTo.sys_id;

function getLowestUser() {
  var userList = new Array();
  var cg = new GlideRecord('sys_user_grmember');
  cg.addQuery('group', current.assignment_group);
  cg.query();
  while (cg.next()) {
    var tech = cg.user.toString();
    var cnt = countTickets(tech);
    //gs.addInfoMessage("Tech counts " + cg.user.name + ' ' + cnt + " " + tech);
    userList.push({ sys_id: tech, name: cg.user.name, count: cnt });
  }
  for (var i = 0; i < userList.length; i++) {
    //gs.addInfoMessage(userList[i].sys_id + " " + userList[i].name + " " + userList[i].count);
  }
  userList.sort(function(a, b) {
    //gs.addInfoMessage("Sorting: " + a.sys_id + "(" + a.count + "); " + b.sys_id + "(" + b.count + ")");
    return a.count - b.count;
  });
  if (userList.length <= 0) return '';
  //return userList[0].sys_id;
  return userList[0];
}

function countTickets(tech) {
  var ct = new GlideRecord('u_service_call');
  ct.addQuery('assigned_to', tech);
  ct.addQuery('active', true);
  ct.query();
  return ct.getRowCount();
}

// NOTE:  You may also want to couple this busines rule with this client script

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
  if (isLoading || newValue == '') {
    return;
  }

  g_form.setValue('assigned_to', '');
  //Type appropriate comment here, and begin script below
}
