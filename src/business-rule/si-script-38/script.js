condition:
current.table_name == 'hr_case'

Script:
var ua = new GlideRecord('hr_case');

if (ua.get('sys_id', current.table_sys_id)) {
ua.u_documentation_received = true;
ua.update();
}
