// Called from: Check Existing App Access (cmdb_ci)

var AppAccessChecker = Class.create();

AppAccessChecker.prototype = Object.extendsObject(AbstractAjaxProcessor, {
  userHasAccount: function() {
    var answer = 'false';
    var userID = this.getParameter('sysparm_user_id');
    var appID = this.getParameter('sysparm_app_id');

    // query the u_appl_exist_role_accts table to see if there is an active application
    // account for the user
    var gr = new GlideRecord('u_appl_exist_role_accts');
    gr.addQuery('u_active', true);
    gr.addQuery('u_exist_appl_account', appID);
    gr.addQuery('u_user', userID);
    gr.query();
    if (gr.next()) {
      answer = 'true';
    }
    return answer;
  },
});
