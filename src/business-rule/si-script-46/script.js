var travelRate = current.assigned_to.company.u_travel_rate;
var laborRate = current.assigned_to.company.u_labor_rate;

var estimatedTravelTime = getHours(current.estimated_travel_duration);
var estimatedLaborTime = getHours(current.estimated_work_duration);
var actualTravelTime = getHours(current.actual_travel_duration);
var actualLaborTime = getHours(current.calendar_duration);

var estimatedTravelCost = travelRate * estimatedTravelTime;
var estimatedLaborCost = laborRate * estimatedLaborTime;
var actualTravelCost = travelRate * actualTravelTime;
var actualLaborCost = laborRate * actualLaborTime;
var actualPartsCost = current.u_parts_charge - 0;

current.u_actual_travel_charge = actualTravelCost;
current.u_actual_labor_charge = actualLaborCost;
current.u_estimated_travel_charge = estimatedTravelCost;
current.u_estimated_labor_charge = estimatedLaborCost;

// EH - Modification
current.u_total_charges = actualTravelCost + actualLaborCost + actualPartsCost;

function getHours(duration) {
  var gdt = new GlideDateTime(duration);
  var milliseconds = gdt.getNumericValue();
  var hoursPerMs = 1 / 1000 / 60 / 60;
  var hours = milliseconds * hoursPerMs;
  return hours;
}
