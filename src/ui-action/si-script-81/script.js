var vis = new GlideRecord("u_visits");
vis.u_visitor = current.sys_id;
var sysID = vis.insert();

var mySysID = current.update();

action.setRedirectURL(vis);
action.setReturnURL(current);
