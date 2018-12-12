function onChange(control, oldValue, newValue, isLoading) {
   g_form.setValue('existing_access', 'No');
   g_form.hideAllFieldMsgs();
   if (newValue != ''){
      var ga = new GlideAjax('AppAccessChecker');
      ga.addParam('sysparm_name','userHasAccount');
      ga.addParam('sysparm_app_id', g_form.getValue('Enterprise_App'));
      ga.addParam('sysparm_user_id', g_form.getValue('u_requested_for'));
      ga.getXMLWait();

      if (ga.getAnswer() == 'true'){
         g_form.showFieldMsg('Enterprise_App', 'An active application account has been found for this user.  If your account is locked out or you have forgotten your password, please use the Password Reset Request. Otherwise, provide a reason for the application account update below.', 'info');
         g_form.setValue('existing_access', 'Yes');
      }
   }
}
