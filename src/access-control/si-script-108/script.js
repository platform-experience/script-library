answer = canReadSupervisorCases();

function canReadSupervisorCases() {
  if (gs.getUserID() == current.opened_by) {
    return true;
  } else if (
    gs.getUser().isMemberOf('HR - Tier 3') &&
    gs.getUserID() == current.assigned_to
  ) {
    return true;
  } else if (
    gs.getUser().isMemberOf('HR - Tier 3') &&
    gs.getUserID() != current.assigned_to
  ) {
    return false;
  } else if (gs.hasRole('hr_case_reader')) {
    return true;
  } else {
    return false;
  }
}
