Run Script Activity
if(current.hasAttachments()){
	   workflow.scratchpad.req_attachment = true;
	}
	 else {
		  workflow.scratchpad.req_attachment = false;
	   }
….then use an if Condition in the workflow to check the scratchpad variable
