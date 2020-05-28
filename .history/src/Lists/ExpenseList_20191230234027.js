import React  from "react";

import "./index.scss";

function ExpenseList({expense}) {
  return(
    <ul className="list-group-item">
        {exexpense.map(
          (ex)=>{
            return(
          <li className="list-group-item">{ex.description }   ,  {ex.amount}</li>
            )
          }
        )}
    </ul>
  );
}

export default ExpenseList;
