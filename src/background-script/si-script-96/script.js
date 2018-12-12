var usr = new GlideRecord('sys_user');
	usr.addQuery('user_name', 'NOT IN', 'admin,itil,employee');
	usr.addQuery('active', true)
	usr.query();
	while (usr.next()) {
usr.active = false;
usr.update ();
gs.log('>>> User ' + usr.user_name + ' inactivated');
	}