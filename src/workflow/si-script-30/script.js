var id = current.cmdb_ci.sys_id;
var answer = [];
findParent(id);

function findParent(ID) {
  var cir = new GlideRecord('cmdb_rel_ci');
  cir.addQuery('child', ID);
  cir.query();
  while (cir.next()) {
    var parent = cir.parent;
    if (parent != '') {
      if (parent.sys_class_name == 'cmdb_ci_service') {
        answer.push(parent.owned_by.sys_id);
        //add the following line if you want the Business Service Owner's approval also
        //answer.push(parent.managed_by.sys_id);
        //gs.log("Business service is: " + parent.name +"\nBusiness Service Owner is: " + parent.owned_by.name)
      }
      //gs.log("Pushed " + parent.change_control.name + " to approval array");
      parent = cir.parent;
      findParent(parent);
    }
  }
}
