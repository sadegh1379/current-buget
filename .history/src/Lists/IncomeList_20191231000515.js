import React from "react";
import "./index.scss";

function IncomeList({income}) {
  return(
    <ul className="list-group-item text-center"><h3>Income</h3>
   
    {income? expense.map(
      (ex)=>{
        return(
      <li className="list-group-item">{ex.description }   ,  {ex.amount}</li>
        )
      }
    
      ):null
    }
</ul>
  )
}

export default IncomeList;
