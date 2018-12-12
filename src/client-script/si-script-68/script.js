function onChange(control, oldValue, newValue, isLoading, isTemplate) {
   if (isLoading || newValue == '') {
      return;
   }

var gr = g_form.getReference('caller_id');
  if(gr.locked_out == 'true'){
     g_form.setVisible('location', false);
 }
   //Type appropriate comment here, and begin script below
}
