import React  from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
const ExpenseItem = (props) =>{
    const expense = props;
    console.log(props);
    const date = expense.date;  
    return(
        <div className="expense-item">
            <div >
              {/* {date.toISOString()} */}
              <ExpenseDate Date= {date}/>
            </div>
            <div className="expense-item__description">
                <h3>{expense.Title}</h3>
                <div className= "expense-item__price">${expense.amount}</div>
            </div>    
        </div>
    )
}

export default ExpenseItem;