function onChange(control, oldValue, newValue, isLoading, isTemplate) {
	if (isLoading || newValue === '') {
		return;
	}
	var phoneField = 'home_phone';
	new HR_Utils_UI().validatePhoneNumberForField(newValue, isLoading, phoneField);
}