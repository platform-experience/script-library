When creating a child task in the Workflow create task activity, you can put the following lines of code in the advanced windows to assign the child to the same group and person as the parent task.
task.assigned_to = current.assigned_to;
task.w_group = current.assignment_group;
