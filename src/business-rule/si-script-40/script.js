URL: https://unitedhrpov.service-now.com/cti.do?sysparm_cti_rule=united_hr_cti&sysparm_caller_phone=09492818574

function united_hr_cti() {
	var url = null;
	var name = sysparm_caller_name;
	eid = sysparm_caller_id;  // double check this
	var phone = sysparm_caller_phone;
	var taskID = sysparm_task_id;
	var fQuery = sysparm_query;
	if (fQuery == null) {
		fQuery = '';
	}
	var view = sysparm_view;
	if (view == null || view == '') {
		view = "itil";  //double check view
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
		var gr = new GlideRecord("hr_case");
		gr.addQuery("active", "true");
		gr.addQuery("opened_for", userID);
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
		fQuery += "opened_for=" + userID;
		fQuery += "^opened_by=" + userID;
	}
	if (url == null) {
		url = "hr_case.do?sys_id=-1";
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
