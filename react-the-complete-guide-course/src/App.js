import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {id:"e0", title:"car insurance", amount: 30, date: new Date(2021,2,28)},
    {id:"e1", title:"bills", amount: 109, date: new Date(2021,4,8)},
    {id:"e2", title:"games", amount: 74, date: new Date(2021,5,24)},
    {id:"e3", title:"shopping", amount: 321, date: new Date(2021,2,13)},
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
    </div>
  );
}

export default App;
