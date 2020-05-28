import React , { useContext } from "react";

import "./index.scss";

function ExpenseList({expense}) {
  return(
    <ul className="list-group-item">
        {expense.map(
          (ex)=>{
            return(
              li.list
            )
          }
        )}
    </ul>
  );
}

export default ExpenseList;
