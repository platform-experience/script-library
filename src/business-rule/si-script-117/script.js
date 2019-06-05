(function executeRule(current, previous /*null when async*/) {
  var wo = new GlideRecord('wm_order');
  var totalTime = 0;

  wo.addQuery('initiated_from', current.sys_id);
  wo.query();

  while (wo.next()) {
    var wot = new GlideRecord('wm_task');
    wot.addQuery('parent', wo.getUniqueValue());
    wot.query();
    while (wot.next()) {
      var tw = new GlideRecord('task_time_worked');
      tw.get('task', wot.getUniqueValue());

      var gdTime = new GlideDuration();
      gdTime.setValue(tw.getValue('time_worked'));
      totalTime += gdTime.getNumericValue();
    }
  }

  // case time worked
  var gdCaseTime = new GlideDuration();
  gdCaseTime.setValue(current.getValue('time_worked'));
  totalTime += gdCaseTime.getNumericValue();

  var gdTest = new GlideDuration(totalTime);
  gs.info('totalTime: ' + gdTest.getDisplayValue());
  totalTime = Math.round(totalTime / 1000 / 60 / 60);

  gs.info('Final result: ' + totalTime + ' hours');

  var entitlement = new GlideRecord('service_entitlement');
  if (
    entitlement.get(current.entitlement) &&
    entitlement.getValue('unit') == 'hours'
  ) {
    var rem_hours = entitlement.getValue('remaining_units');
    if (rem_hours > 0) {
      entitlement.setValue('remaining_units', rem_hours - totalTime);
      entitlement.update();
    }
  }
})(current, previous);
