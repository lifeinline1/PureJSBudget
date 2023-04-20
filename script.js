const budgetForm = document.getElementById("budget-form");
const budgetTitle = document.getElementById("budget-title");
const budgetAmount = document.getElementById("budget-amount");
const budgetType = document.getElementById("budget-type");
const incomeTotalText = document.getElementById("income-total");
const expenseTotalText = document.getElementById("expense-total");
const incomeTable = document.getElementById("table-income");
const expenseTable = document.getElementById("table-expense");
const incomeTableBody = document.getElementById("table-income-body");
const expenseTableBody = document.getElementById("table-expense-body");

const incomeList = [];
const expenseList = [];

budgetForm.addEventListener("submit", (event) => addBudget(event));

function addBudget(e) {
  e.preventDefault();

  let type = budgetType.value;

  if (type == "income") {
    let income = {
      title: budgetTitle.value,
      amount: +budgetAmount.value,
      type: type,
    };
    incomeList.push(income);
    addIncomeToTable(income);
  }
  if (type == "expense") {
    let expense = {
      title: budgetTitle.value,
      amount: +budgetAmount.value,
      type: type,
    };
    expenseList.push(expense);
  }
}

function addIncomeToTable(obj) {
  let row = incomeTableBody.insertRow(-1);
  let titleCell = row.insertCell(0);
  let amountCell = row.insertCell(1);
  let buttonsCell = row.insertCell(2);

  titleCell.innerHTML = obj.title;
  amountCell.innerHTML = obj.amount;
  buttonsCell.innerHTML = `<button onclick="editIncome(${1})" id="table-income-edit-button">Edit</button>
  <button onclick="deleteIncome(${1})" id="table-income-edit-button">Delete</button>`;
}

function editIncome(num) {
  console.log("Edited: ", num);
}

function deleteIncome(num) {
  console.log("Deleted: ", num);
}
