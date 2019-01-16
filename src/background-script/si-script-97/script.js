var sysTranslated = new GlideRecord('sys_translated');
sysTranslated.addQuery('label', 'CONTAINS', '[es]');
sysTranslated.query();
while (sysTranslated.next()) {
  var label = sysTranslated.getValue('label');
  var esIndex = label.indexOf('[es]');
  var trimmedLabel = label.substring(0, esIndex);
  sysTranslated.setValue('label', trimmedLabel);
  sysTranslated.update();
  gs.print('Trimmed: "' + label + '" -> "' + trimmedLabel + '"');
}
