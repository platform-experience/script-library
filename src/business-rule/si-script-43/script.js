var feedback_user = current.user;

usr = new GlideRecord('sys_user');

usr.addQuery('sys_id', feedback_user);
usr.query();

while (usr.next()){

	usr.u_badge_points ++;
    usr.update();
}
