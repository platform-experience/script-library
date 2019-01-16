gs.log('***** We made it into the Calc Parts GrandTotal business rule');

var grand_total = 0;

var WO_SysId = current.parent.sys_id;

var WO_task_SysId = current.sys_id;

gs.log('***** the sys id of the work order task is: ' + WO_task_SysId);

var wo_task = new GlideRecord('wm_task');
wo_task.addQuery('parent', WO_SysId);

wo_task.query();

while (wo_task.next()) {
  //grand_total = grand_total + parts.u_total_cost;
  //grand_total += parts.u_total_cost;
  grand_total += parseFloat(wo_task.u_total_charges);
}

gs.log('***** the GRAND TOTAL is: ' + grand_total);

var work_order = new GlideRecord('wm_order');
work_order.addQuery('sys_id', WO_SysId);

work_order.query();
while (work_order.next()) {
  work_order.u_total_charges = grand_total;
  work_order.update();
}
