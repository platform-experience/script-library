var po = new GlideRecord('proc_po');
   //po.assigned_to = current.u_requested_for;
   po.short_description = current.short_description;
   po.vendor = current.company;
   po.u_billing_contact = current.company.contact;
   po.bill_to = current.company.contact.location;
   po.requested_by = current.caller;
   po.requested = current.opened_at;
   po.total_cost = current.u_total_charges;

   po.u_fmnow = true;
   po.u_work_order = current.sys_id;

   var sysID = po.insert();

   gs.addInfoMessage("Purchase order " + po.number + " created");
   action.setRedirectURL(po);
   action.setReturnURL(current);


   current.u_purchase_order = sysID;
   current.update();
