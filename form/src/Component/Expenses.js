import React from "react";
import ExpenseItem from "./ExpenseItem";
//import ExpenseItem from "./ExpenseItem";
const Expenses = (props) =>{
    const expense = props.Items;
    console.log(expense);
    return(
        expense.map((item, index)=>{
            return(
            <ExpenseItem date={item.date} Title={item.Title} amount={item.amount} key={index}/>
            );
        })
       
    )
    
}
export default Expenses;