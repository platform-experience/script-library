/*Copy and Paste this script in the "Auto Assign" business rule in the "Human Resources: Core" application. Afterwards create a true/false field on the self-service view or whatever view you want of a user profile that has the name u_round_robin_active. The label can be anything you want. If you change the name of the field then you will have to edit the line in the script "if(agent.u_round_robin_active){" to reflect what you changed it to. If the field is checked on the user profile, then that user will be auto assigned cases, otherwise they will not.
If you want to set the default for everyone to be checked, after you add the field you can run this script in "System Definition > Scripts - Background"
var gr = new GlideRecord('sys_user');
gr.addQuery('active', true);
gr.query();
while(gr.next()){
gr.u_round_robin_active = true;
gr.update();
}*/
(function executeRule(current, previous /*null when async*/) {
  if (current.skip_auto_assign) return; // assignment will be done via other means than this BR (e.g., workflow, manual)

  // see "Matching Rules" menu item / module to configure assignment rules
  var matchingRuleProcessor = new global.MatchingRuleProcessor();
  var agents = matchingRuleProcessor.processAndGetCandidates(current, 10);

  if (agents && agents.length > 0) {
    for (var i = 0; i < agents.length; i++) {
      var agent = new GlideRecord('sys_user');
      agent.addQuery('sys_id', agents[i]);
      agent.query();
      if (agent.next()) {
        if (agent.u_round_robin_active) {
          current.assigned_to = agent.sys_id;
          break;
        }
      }
    }
    gs.addInfoMessage(
      gs.getMessage('{0} was assigned to {1}.', [
        current.number,
        current.getDisplayValue('assigned_to'),
      ])
    );
  } else
    gs.addInfoMessage(
      gs.getMessage(
        'No agents meet the auto-assignment criteria for {0}',
        current.number
      )
    );
})(current, previous);
