#Auto Assign Availability

## Description

Disable/Enable whether or not you will be automatically assigned to a case.

## Usage

Copy and Paste this script in the "Auto Assign" business rule in the "Human Resources: Core" application. Afterwards create a true/false field on the self-service view or whatever view you want of a user profile that has the name u_round_robin_active. The label can be anything you want. If you change the name of the field then you will have to edit the line in the script "if(agent.u_round_robin_active){" to reflect what you changed it to. If the field is checked on the user profile, then that user will be auto assigned cases, otherwise they will not.  
If you want to set the default for everyone to be checked, after you add the field you can run this script in "System Definition > Scripts - Background"  
var gr = new GlideRecord('sys_user');  
gr.addQuery('active', true);  
gr.query();  
while(gr.next()){  
gr.u_round_robin_active = true;  
gr.update();  
}  
