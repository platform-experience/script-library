function openFormDialog(){
    var sysId;
    if (typeof rowSysId == 'undefined')
        sysId = gel('sys_uniqueValue').value;
    else
        sysId = rowSysId;
Utility.getInstance().showBackground(document.body, 999, "");
    var values = {};
    values["type"] = "Development";
    values["short_description"] = g_form.getValue("short_description");
    values["description"] = g_form.getValue("description");
    values["assigned_to"] = g_form.getValue("assigned_to");
    values["cmdb_ci"] = g_form.getValue("cmdb_ci");
    values["classification"] = "Defect";
    values["defect"] = sysId;
values["product"] = g_form.getValue("u_sdlc_product_reference");
    new FormDialogDefinition(null, "rm_story", $("rm_defect.form_scroll"), "scrum", "true").setAfterCloseCallback(function(action_verb, sys_id, updated_table, display_value){
        var gr = new GlideRecord("rm_story");
        gr.addQuery("sys_id", sys_id);
        gr.query();
        if (gr.next()){
            gr.defect = sysId;
            gr.update(function(){
                Utility.getInstance().hideBackground("");
                if (GlideList2.get("rm_defect.rm_story.defect"))
                    GlideList2.get("rm_defect.rm_story.defect").refresh();
            });
        } else {
            Utility.getInstance().hideBackground("");
            if (GlideList2.get("rm_defect.rm_story.defect"))
                GlideList2.get("rm_defect.rm_story.defect").refresh();
        }
    }).setCloseCallback(function(){
        Utility.getInstance().hideBackground("");
    }).open(null, "defect", sysId, values);
}
