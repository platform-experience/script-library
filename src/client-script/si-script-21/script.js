function onChange(control, oldValue, newValue, isLoading, isTemplate) {
  /*
Purpose:  Based on a Yes/No Field on a form, the attachment icon is removed or available
Example Detais:  The Disable Attachments field controls if the attachment icon is displayed or not
Used in: This Client script can be used for forms or Service Catalog
*/
  if (isLoading || newValue === '') {
    return;
  }
  //if disable_attachement field is set to yes
  if (g_form.getValue('disable_attachments') == 'Yes') {
    //disable attachments by removing paperclip icon
    g_form.disableAttachments();
  } else if (g_form.getValue('disable_attachments') == 'No') {
    //enable attachments by displaying paperclip icon
    g_form.enableAttachments();
  }
}
