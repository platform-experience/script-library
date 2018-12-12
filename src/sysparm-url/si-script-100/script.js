// We aren't actually going to write a record here so set abort.
current.setAbortAction(true);

var ci_list;
var x = new CIEnum();

//gs.log('CI is ' + producer.name.getDisplayValue());
//gs.log('Direction is ' + producer.direction);

if (producer.direction == 'parent') {
    ci_list = x.go(producer.name.getDisplayValue(), "parent");
} else if (producer.direction == 'child') {
    ci_list = x.go(producer.name.getDisplayValue(), "child");
} else if (producer.direction == 'all') {
    ci_list_1 = x.go(producer.name.getDisplayValue(), "parent");
    ci_list_2 = x.go(producer.name.getDisplayValue(), "child");
    ci_list = ci_list_1 + ',' + ci_list_2;
}

//This builds a LIST of related tasks
//producer.redirect = "/nav_to.do?uri=task_list.do?sysparm_query=cmdb_ci.sys_idIN" + ci_list;
producer.redirect = "task_list.do?&sysparm_query=cmdb_ci.sys_idIN" + ci_list + "^active%3Dtrue^GROUPBYcmdb_ci";
