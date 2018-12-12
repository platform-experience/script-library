Within a Run Script Activity
Note that user_name and group_name variables are references
PassVariables();

function PassVariables() {

   //workflow.scratchpad.adUser = "eric.hemmer";
   workflow.scratchpad.adUser = current.variables.user_name.user_name;
   //workflow.scratchpad.adGroups = "Database";
   workflow.scratchpad.adGroups = current.variables.group_name.name;
   //current.calendar_duration = current.variables.calendar_duration;

}
