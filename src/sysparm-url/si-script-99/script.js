// We aren't actually going to write a record here so set abort.
current.setAbortAction(true);

var ci_list;
var x = new CIEnum();

//gs.log('CI is ' + producer.name.getDisplayValue());
//gs.log('Direction is ' + producer.direction);

if (producer.direction == 'parent') {
  ci_list = x.go(producer.name.getDisplayValue(), 'parent');
} else if (producer.direction == 'child') {
  ci_list = x.go(producer.name.getDisplayValue(), 'child');
} else if (producer.direction == 'all') {
  ci_list_1 = x.go(producer.name.getDisplayValue(), 'parent');
  ci_list_2 = x.go(producer.name.getDisplayValue(), 'child');
  ci_list = ci_list_1 + ',' + ci_list_2;
}

//This builds a LIST of related tasks
//producer.redirect = "/nav_to.do?uri=task_list.do?sysparm_query=cmdb_ci.sys_idIN" + ci_list;

//This builds a REPORT of related CI's (but it doesn't set the report type or groupby field)
//producer.redirect = "sys_report_template.do?sysparm_table=cmdb_ci&sysparm_type=list&sysparm_query=sys_idIN" + ci_list;

//This build a list of related CI's and Groups them by company
producer.redirect =
  'cmdb_ci_list.do?&sysparm_query=sys_idIN' + ci_list + '^GROUPBYcompany';
