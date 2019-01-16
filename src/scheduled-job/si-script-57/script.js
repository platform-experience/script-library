var oldName = 'Koch Fertilizer';

var newName = 'Koch Ag & Energy Services';
var oldNamePattern = new RegExp(oldName, 'g');

var kb = new GlideRecord('kb_knowledge');
kb.addQuery('short_description', 'CONTAINS', oldName);
kb.addOrCondition('text', 'CONTAINS', oldName);
kb.query();
while (kb.next()) {
  kb.short_description = (kb.short_description + '').replace(
    oldNamePattern,
    newName
  );
  kb.text = (kb.text + '').replace(oldNamePattern, newName);
  //kb.log('I got ' + kb.number + ': ' + kb.short_description);
  kb.update();
}
