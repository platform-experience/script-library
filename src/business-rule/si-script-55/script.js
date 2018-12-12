1.	Created three Email Notifications
a.	Notification: AAA - Activity Assigned to Me
i.	Event – activity.assigned  (probably copied incident.assigned)
ii.	Business Rule – activity events
b.	Notification: AAA - Notify parent assignee
i.	Event – activity.completed (probably copied incident.completed)
ii.	Business Rule – activity events


if (!current.assigned_to.nil() && current.assigned_to.changes()) {
  gs.eventQueue("activity.assigned", current, current.assigned_to.getDisplayValue() , previous.assigned_to.getDisplayValue());
}

if (current.state.changesTo(3) || current.state.changesTo(4) || current.state.changesTo(7)){
  gs.eventQueue("activity.completed", current, current.state, previous.state);
  //gs.eventQueue("activity.completed", current, current.assigned_to.getDisplayValue() , previous.assigned_to.getDisplayValue());
}
