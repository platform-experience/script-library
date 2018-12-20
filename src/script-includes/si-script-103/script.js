// Client Script
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
	if (isLoading || newValue == '') {
	   return;
	}

   var model = g_form.getReference('model');
   var unit_cost = model.cost;
   var quantity = g_form.getValue('required_quantity');

   var ajax = new GlideAjax('CalcPartsSubTotal');
   ajax.addParam('sysparm_name','Sub_Total');
   ajax.addParam('sysparm_cost',parseFloat(unit_cost));
   ajax.addParam('sysparm_qnty',quantity);
   ajax.getXMLWait();

   var PartsSubTotal = ajax.getAnswer();

  // alert('PartsSubTotal is: '+ parseFloat(PartsSubTotal));

   g_form.setValue('u_total_cost.display', parseFloat(PartsSubTotal));

}
// Script Include

var CalcPartsSubTotal = Class.create();

CalcPartsSubTotal.prototype = Object.extendsObject(AbstractAjaxProcessor, {
   Sub_Total: function() {
      var answer = '';
      var UnitCost = this.getParameter('sysparm_cost');
      var Quantity = this.getParameter('sysparm_qnty');

	  gs.log('***** the UnitCost passed in is: ' + UnitCost);
	  gs.log('***** the Quantity passed in is: ' + Quantity);

	  answer = parseFloat(UnitCost)*parseFloat(Quantity);

	  gs.log('***** the Answer calculated is: ' + answer);

	  return parseFloat(answer);
   }
});

// An Simple alternative would have been to use this business rule, but the update only happens after the Save.


// Finally, here is a client script that works by itself.
// The key is using .display and parseFloat together.

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
	if (isLoading || newValue == '') {
	   return;
	}

   var model = g_form.getReference('model');
   var unit_cost = model.cost;
   var quantity = g_form.getValue('required_quantity');

   var PartsSubTotal = unit_cost*quantity;

   g_form.setValue('u_total_cost.display', parseFloat(PartsSubTotal));

}
