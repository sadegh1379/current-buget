import React from "react";
import "./index.scss";

function IncomeList({income}) {
  return(
    <ul className="list-group-item text-center"><h3>Income</h3>
   
    {income? income.map(
      (inc)=>{
        return(
          <li className="list-group-item"><span className="h1"></span>{inc.description }   :  {inc.amount}</li>
        )
      }
    
      ):null
    }
</ul>
  )
}

export default IncomeList;
