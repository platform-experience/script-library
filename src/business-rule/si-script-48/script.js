//Force non hr users to use the hr_request view for hr

function hrGetViewName() {
  if (gs.hasRole('hr')) {
    return;
  }
  answer = 'hr_request';
}

function hr_listGetViewName() {
  hrGetViewName();
}
