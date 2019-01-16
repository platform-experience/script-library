answer = ifScript();
function ifScript() {
  if (current.variables.u_expedite.getDisplayValue() == 'Yes') {
    return 'yes';
  }
  return 'no';
}
