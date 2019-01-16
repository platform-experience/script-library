// Business Rule to Create the Expense Line
var tableName = current.sys_class_name;
var recordId = current.sys_id;
var cost = current.cost;

createExpenseLine(tableName, recordId, cost);

function createExpenseLine(tableName, recordId, cost) {
  var expLine = new GlideRecord('fm_expense_line');
  expLine.cost_table = tableName;
  expLine.cost_id = recordId;
  expLine.source_table = tableName;
  expLine.source_id = recordId;
  expLine.amount = cost;
  expLine.short_description = 'Asset Assignment';
  expLine.summary_type = 'run_business';
  expLine.state = 'pending';
  expLine.process_date = gs.now();
  expLine.insert();
}

// Expense Allocation
// Summary Type = Run Business
