(function executeRule(current, previous /*null when async*/) {
  /* Purpose: This business rule will create a record for each items in a list of a form and have the new records point to the main record.
    Example Details:  When entering one or multiple buildings in a list, a record is created that has a link to the Scripting Example record
    Used in: This Business Rule can be used for any tables
  */

  // store the value of the building list glide list in a variable
  var locationArray = current.building_list.split(',');

  // create a variable of type of table where you are creating record
  var ccAssignment = new GlideRecord("x_snc_servicenow_s_building_access_approval");

  // for each item in the array
  for (var i = 0; i < locationArray.length; i++) {

    // initialize a new record, set values and then insert the record
    ccAssignment.initialize();
    ccAssignment.name = current.opened_by.name;

    // creates a link back to scripting example table record
    ccAssignment.scripting_record = current.sys_id;

    // stores value of single building in the record
    ccAssignment.building = locationArray[i];
    ccAssignment.insert();
  }
})(current, previous);