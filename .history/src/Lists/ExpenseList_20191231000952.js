import React  from "react";

import "./index.scss";

function ExpenseList({expense}) {
  
  return(
    <ul className="list-group-item text-center"><h3>Expenses</h3>
   
        {expense? expense.map(
          (ex)=>{
            return(
          <li className="list-group-item  border-danger"><span className="h5">{ex.description }</span> :  {ex.amount}</li>
            )
          }
        
          ):null
        }
    </ul>
  );
}

export default ExpenseList;
