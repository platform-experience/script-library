// By changing the last part of the code, he was able to have the incident table searched instead of the knowledge base. Included is the updated code to copy and paste in a client script on load for the incident table
function onLoad() {
  var control = g_form.getControl('short_description');
  //jslog('control = ' + control);
  control.onblur = myOnBlurKnowledgePop;
}

function myOnBlurKnowledgePop() {
  var element = $$('a[data-type="attribute_knowledge"]')[0];
  var customPopup = element.getAttribute('data-custom');
  var table = element.getAttribute('data-table');
  var operator = element.getAttribute('data-op');
  var ref = element.getAttribute('data-for');
  element = $(ref);
  if (!element) return;
  window.fillField = ref;
  var searchText = element.value;
  if (customPopup) window[customPopup](searchText, element);
  else {
    var url =
      'incident_list.do?sysparm_query=active%3Dtrue%5EGOTOshort_descriptionLIKE' +
      encodeURIComponent(searchText);
    popupOpenStandard(url, 'kb2task');
  }
}
