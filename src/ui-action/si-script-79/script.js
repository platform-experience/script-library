var asset = current.sys_id;

var calendar =
  'sys_report_template.do?sysparm_table=u_maintenance_tasks&sysparm_type=calendar&sysparm_cal_field=due_date&sysparm_from_list=true&sysparm_manual_labor=true&sysparm_query=u_asset=' +
  asset;

action.setRedirectURL(calendar);
action.setReturnURL(current);
