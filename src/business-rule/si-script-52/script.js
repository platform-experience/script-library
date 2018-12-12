There are times when you'll need to write reports where metrics don't already exist so you'll end up creating new tables and fields.  

1.	# of incidents escalated by a group?
It would be really easy if I could create a database view between assignment group and audit history, but it doesn't seem to work.  I then looked at metrics and not sure you can get what you need out of it.  So, I'd actually create a new table with 4 reference fields to store task, old group(oldgroupfield), new group(newgroupfield) and assignee (to be used for the the incidents per person question below).  Then write a business rule before each update to assignment group make an insert into your table.  Should look something like:

Business rule pseudo code:
when: before, insert or update
condition:  current.assignement_group.changes()

Script:
groupChange();

function groupChange(){
  var grpInsert = new GlideRecord('mynewtable');
  grpInsert.oldgroupfield = previous.assignment_group;
  grpInsert.newgroupfield = current.assignment_group;
  grpInsert.task = current.sys_id;
  grpInsert.insert();
}
    
¥	# of incidents escalated by service desk
◦	How many incidents went to group 1
◦	How many incidents went to group 2
You'll be able to report on this if you take the approach I mentioned above.  When you write the report you'd put a filter in where old group is service desk then you could group by new group.  

¥	# of escalations per ticket
◦	How many times times did the ticket get escalated?
We already have a field named 'Reassignment Count' so you can do this right now.

¥	# of incidents escalated per person
◦	How many incidents did service desk employee 1 do?
◦	How many incidents did service desk employee 2 do?

Write another business rule for assignee change – same as above, if you're really good you'll figure out how to do it in one business rule ;-)
