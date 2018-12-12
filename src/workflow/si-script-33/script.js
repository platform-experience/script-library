Accessing Variables from a Workflow (not available in sc_request table)
You can access variables from within the workflow using the following syntax:
current.variables.variable_name
So, to set the task's company field to the 'company' variable, do:
task.company = current.variables.company
within your task activity.

Likewise you can add a 'run script' activity to set the sc_req_item's company field
current.company = current.variables.company 

This is also very helpful
http://wiki.servicenow.com/index.php?title=Administering_Applications_and_Modules#Example:_URL_module_that_opens_an_incident_list_with_a_custom_filter.2C_sort.2C_and_groupby
