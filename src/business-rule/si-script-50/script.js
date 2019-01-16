// populate event parm 1 from the list of vendors

if (!current.u_vendors.nil()) {
  //get vendor sys_ids from procurement record

  var list = current.u_vendors.toString();
  var array = list.split(',');
  var recipients = '';

  for (var i = 0; i < array.length; i++) {
    //gs.print("Reference value is: " + array[i]);
    var vendor = new GlideRecord('core_company');
    vendor.get(array[i]);
    recipients += vendor.contact + ',';

    gs.log('*****' + array.length + ' ' + recipients);
  }
}

gs.eventQueue('procurement.bid', current, recipients, current.sys_id);
