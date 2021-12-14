import React from "react";
import "./ExpenseDate.css";
const ExpenseDate = (props) =>{

    const month =props.Date.toLocaleString('en-us',{month:'long'}); 
    const day = props.Date.toLocaleString('en-US', {day : '2-digit'});
    const year = props.Date.getFullYear();

return(
 <div className="expense-date">
      <div className="expense-month">{month}</div>
      <div className="expense-day">{day}</div>
      <day className="expense-year">{year}</day>
 </div>
);
}

export default ExpenseDate;