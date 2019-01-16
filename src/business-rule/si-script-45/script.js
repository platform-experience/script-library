gs.log('***** We made it into the Calc Parts GrandTotal business rule');

var grand_total = 0;

var WO_SysId = current.parent.sys_id;

var WO_task_SysId = current.work_order_task.sys_id;

gs.log('***** the sys id of the work order task is: ' + WO_task_SysId);

var parts = new GlideRecord('wm_part_requirement');
parts.addQuery('work_order_task', WO_task_SysId);

parts.query();

while (parts.next()) {
  //grand_total = grand_total + parts.u_total_cost;
  //grand_total += parts.u_total_cost;
  grand_total += parseFloat(parts.u_parts_subtotal);
}

gs.log('***** the GRAND TOTAL is: ' + grand_total);

var work_order_task = new GlideRecord('wm_task');
work_order_task.addQuery('sys_id', WO_task_SysId);

work_order_task.query();
while (work_order_task.next()) {
  work_order_task.u_parts_charge = grand_total;
  work_order_task.update();
}
