import logo from './logo.svg';
import './App.css';
import Expenses from './Component/Expenses';
import ExpenseItem from './Component/ExpenseItem';
function App() {
  const expense = [
    {
      id:"1",
      Title:"car Insurence1",
      amount:"300",
      date: new Date(2019, 1, 1),

    },

    {
      id:"4",
      Title:"Bike insurence",
      amount:"300",
      date: new Date(2019, 1, 1),

    },

    {
      id:"2",
      Title:"Laptop",
      amount:"300",
      date: new Date(2019, 1, 1),

    },

    {
      id:"3",
      Title:"mobile price",
      amount:"300",
      date: new Date(2019, 1, 1),

    },

  ]
  return (
    <div>
     lets start
     <Expenses Items ={expense}/>
    </div>
  );
}

export default App;
