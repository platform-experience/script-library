function onChange(control, oldValue, newValue, isLoading) {


    var affectedLabel = $('label.hr.u_affected_employee');
    var affectedField = $('sys_display.hr.u_affected_employee');
    if (!affectedLabel || !affectedField)
        return;

    if (!newValue) {
        affectedLabel.setStyle({backgroundImage: ""});
        affectedField.setStyle({color: ""});
        return;
    }
    g_form.getReference('u_affected_employee', vipaffectedback);
}

function vipaffectedback(affected) {
    var affectedLabel = $('label.hr.u_affected_employee');
    var affectedField = $('sys_display.hr.u_affected_employee');
    if (!affectedLabel || !affectedField)
        return;

    //check for VIP status
    if (affected.vip == 'true') {
        affectedLabel.setStyle({backgroundImage: "url(images/icons/vip.gif)", backgroundRepeat: "no-repeat", backgroundPosition: "95% 55%"});
        affectedField.setStyle({color: "red"});
    } else {
        affectedLabel.setStyle({backgroundImage: ""});
        affectedField.setStyle({color: ""});
    }
}
