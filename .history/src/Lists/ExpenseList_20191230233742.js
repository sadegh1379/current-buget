import React , { useContext } from "react";

import "./index.scss";

function ExpenseList({expense}) {
  return(
    <ul className="list-group-item">
        {expense.map(
          (ex)=>{
            return(
            <li className="list-group-item">{}</li>
            )
          }
        )}
    </ul>
  );
}

export default ExpenseList;
