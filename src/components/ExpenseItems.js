import React,{ useState } from 'react';
import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
function ExpenseItems(props) {
const [title,setTitle]= useState(props.title);  

   const clickHandler=()=>{
    setTitle('UPDATED!!');
    console.log(title);
  };
    
  return (
    <Card className="expense-item">
    <ExpenseDate  date={props.date}/>
      <div className="expanse-item__description">
        <h2 className="expense-item h2">{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItems;
