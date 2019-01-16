current.short_description =
  'This is a ' + producer.u_request_type_2.getDisplayValue() + ' request';

// Hide Opened For if user role isn't Admin

function onLoad() {
  if (!g_user.hasRoleExactly('admin')) {
    g_form.setDisplay('opened_for', false);
    g_form.setMandatory('opened_for', false);
    //g_form.setReadonly('assigned_to',true);
  }
}
