// Rest Operator

function sumExpense(loan, ...Expense) {
  let Total = Expense.reduce((a, b) => a + b);
  return Total - loan;
}
let result = sumExpense(23, 100, 200, 700, 300, 600);
console.log(`Total Expense is : ${result}`);
