import React  from "react";

import "./index.scss";

function ExpenseList({expense}) {
  return(
    <ul className="list-group-item"><h3></h3>
        {expense? expense.map(
          (ex)=>{
            return(
          <li className="list-group-item">{ex.description }   ,  {ex.amount}</li>
            )
          }
        
          ):null
        }
    </ul>
  );
}

export default ExpenseList;
