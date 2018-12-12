function onChange(control, oldValue, newValue, isLoading) {
	if (g_form.getValue('short_description') != ''){
		customKnowledgeSearch();
		//accessing the Submit button through the DOM
		var x = document.getElementsByTagName("button");
		//hide the submit button for 1 second, then make visible again
		x[0].style.visibility="hidden";
		setTimeout(function() {
			x[0].style.visibility="visible";
			}, 1000);
		}
		function customKnowledgeSearch() {
			var searchText = g_form.getValue('short_description');
			var url = 'kb_find.do?sysparm_search=' + escape(searchText);
			url += "&sysparm_nameofstack=kbpop";
			url += "&sysparm_operator=IR_AND_OR_QUERY";
			popupOpenStandard(url, "kb2task");
		}
