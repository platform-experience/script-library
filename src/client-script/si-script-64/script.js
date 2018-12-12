function onChange(control, oldValue, newValue, isLoading) {

    if (newValue == 'existing')
        g_form.setDisplay('account', true);
    else
        g_form.setDisplay('account', false);
}
