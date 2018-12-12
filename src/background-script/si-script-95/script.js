You have to run this multiple times to catch each occurance of the string you are replacing.
var gr = new GlideRecord('kb_knowledge');
gr.query();
while (gr.next()) {
    var needUpdate;
    if (gr.short_description.indexOf('TransNow') >= 0) {
        gr.short_description = gr.short_description.replace('TransNow', 'ServiceNow');
        needUpdate = true;
    }
    if (gr.text.indexOf('TransNow') >= 0) {
        gr.text = gr.text.replace('TransNow', 'ServiceNow');
        needUpdate = true;
    }
    if (needUpdate) {
        gr.update();
        gs.log('Updated: ' + gr.number);
    }
}
