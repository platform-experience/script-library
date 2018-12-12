Check advanced button.

task.short_description = "Please deliver the requested software to " + current.variables.requested_for.getDisplayValue();

or from a catalog task

task.short_description = "Delivery Software to " + current.request.requested_for.name;
