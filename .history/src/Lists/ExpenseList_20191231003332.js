import React  from "react";
import {InputContext} from '../Context'
import "./index.scss";

function ExpenseList({expense}) {
  
  return(
    <ul className="list-group-item text-center"><h3 className="text-danger">Expenses</h3>
   
        {expense? expense.map(
          (ex , index)=>{
            return(
          <li index={index} key={index} className="list-group-item  border-secondary"><span className="h5">{ex.description }</span> :  {ex.amount}</li>
            )
          }
        
          ):null
        }
    </ul>
  );
}

export default ExpenseList;
