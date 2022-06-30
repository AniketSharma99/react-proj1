import logo from "./logo.svg";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseItems from "./components/ExpenseItems";
import Example from "./components/Example";
import FetchAPI from "./components/API/FetchApi";
import Tutorial from "./components/API/tutorial";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const example = [
    {
       Name: "Master Union",
       Place: "Punjab", 
      college: "LPU" ,
      position:"Software Developer"}];
  return (
  //   <div className="App">
  //     <h2 className="expense-item h2">MASTER UNION</h2>
  //     <NewExpense/>
  //     <ExpenseItems
  //       title={expenses[0].title}
  //       amount={expenses[0].amount}
  //       date={expenses[0].date}
  //     ></ExpenseItems>
  //     <ExpenseItems
  //       title={expenses[1].title}
  //       amount={expenses[1].amount}
  //       date={expenses[1].date}
  //     ></ExpenseItems>
  //     <ExpenseItems
  //       title={expenses[2].title}
  //       amount={expenses[2].amount}
  //       date={expenses[2].date}
  //     ></ExpenseItems>
  //     <ExpenseItems
  //       title={expenses[3].title}
  //       amount={expenses[3].amount}
  //       date={expenses[3].date}
  //     ></ExpenseItems>

  //     <Example
  //       Name={example[0].Name}
  //       Place={example[0].Place}
  //       clg={example[0].college}
  //       position={example[0].position}
  //     ></Example>
  //     <FetchAPI/>
  //   </div>
  <div>

    <FetchAPI/>
    <Tutorial/>
  </div>
   );
}

export default App;
