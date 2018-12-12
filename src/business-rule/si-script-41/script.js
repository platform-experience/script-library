https://ehemmsc1.service-now.com/cti.do?sysparm_cti_rule=cti&sysparm_caller_phone=%2B17205708914

NOTE: the %2B represents the "+"

Note: Use this URL: https://wellsfargodevpov.service-now.com/cti.do?sysparm_cti_rule=banker_cti&sysparm_caller_phone=07205708914&sysparm_u_caller_authenticated=true

The sysparm_cti_rule must be the same as the name of the initial function in your busines rule.


function banker_cti() {
	var url = null;
	var name = sysparm_caller_name;
	eid = sysparm_caller_id;
	var phone = sysparm_caller_phone;
	var taskID = sysparm_task_id;
	var fQuery = sysparm_query;
	if (fQuery == null) {
		fQuery = '';
	}
	var view = sysparm_view;
	if (view == null || view == '') {
		view = "itil";
	}
	view = 'itil';

	var userID = null;
	if (eid != null && eid != '') {
		userID = UserGetSysId("employee_number",eid);
	}
	if (userID == null && name != null && name != '') {
		userID = UserGetSysId("name", name);
	}
	if (userID == null && phone != null && phone != '') {
		userID = locateUser(phone);
	}
	if (userID != null) {
		var gr = new GlideRecord("u_service_call");  // EH - Edit
		gr.addQuery("active", "true");
		gr.addQuery("u_caller", userID);  // EH - Edit caller_id to u_caller
		//gr.addQuery("u_caller_authenticated", "true");  // EH - Edit to make true
		gr.setWorkflow(false);
		gr.query();
		if (gr.next()) {
			url = "sys_user.do?sys_id=" + userID + "&sysparm_view=" + view;
		}
	} else {
		if (taskID != null && taskID != '') {
			url = "task.do?sys_id=" + taskID + "&sysparm_view=" + view;
		}
	}
	if (userID != null) {
		if (fQuery.length > 0) {
			fQuery += "^";
		}
		fQuery += "u_caller=" + userID; // EH - Edit caller_id to u_caller
		//fQuery += "^u_affected_employee=" + userID;  // EH - Commented out
	}
	if (url == null) {
		url = "u_service_call.do?sys_id=-1";  // EH - Edit
		if (fQuery != null) {
			url += "&sysparm_query=" + fQuery;
		}
	}
	answer = url;
	return url;
}

function UserGetSysId(field, value) {
	var user = new GlideRecord("sys_user");
	user.addQuery(field, value);
	user.query();
	if (user.next())
		return user.sys_id;
	else
		return null;
}

function locateUser(phone) {
	// Check user records
	var userGr = new GlideRecord('sys_user');
	userGr.addQuery('phone', phone)
	.addOrCondition('mobile_phone', phone);
	userGr.query();
	if (userGr.next()) {
		return userGr.sys_id;
	}

	// Check notification device records
	var deviceGr = new GlideRecord('cmn_notif_device');
	deviceGr.addQuery('phone_number', phone);
	deviceGr.query();
	if (deviceGr.next()) {
		return deviceGr.user;
	}
}

