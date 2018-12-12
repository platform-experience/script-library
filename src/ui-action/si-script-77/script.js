Script:
var scope = new GlideRecord("u_scope_request");
scope.parent = current.sys_id;
scope.assigned_to = current.project_manager;
scope.insert();

action.setRedirectURL(scope);
action.setReturnURL(current);