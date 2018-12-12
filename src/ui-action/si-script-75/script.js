#1 - Creating a UI Action on an import table for a group of Ad Hoc Users.

//query the user table for a user sys_id

var usr = new GlideRecord("sys_user");
usr.addQuery('user_name',current.u_user_name);
usr.query();

while (usr.next()){
    var hr_tsk = new GlideRecord("hr_task");
    hr_tsk.applyTemplate("INVISTA Payroll Update");
    //hr_tsk.u_opened_for = current.u_user_name;
    hr_tsk.u_opened_for = usr.sys_id;
    hr_tsk.insert();
}
#2 - Creating a UI Action that calls a template from the User Table
1.	Create a partent case.
2.	Add opened_for to hr_task.
3.	Create a template for hr tasks.  Refernce the partent in your hr task.
4.	Create a list choice UI action on the user table that invokes the template and populates the opend_for field.

Name: Mass Payroll Update
var hr_tsk = new GlideRecord("hr_task");
hr_tsk.applyTemplate("Union Payroll Update");
hr_tsk.u_opened_for = current.sys_id;
hr_tsk.insert();