import React from "react";
import "./index.scss";

function IncomeList({income}) {
  return(
    <ul className="list-group-item text-center"><h3  className="text-success">Income</h3>
   
    {income? income.map(
      (inc , index)=>{
        return(
          <li index={index} className="list-group-item border-secondary"><span className="h5">{inc.description }</span>   :  {inc.amount}
          spa
          </li>
        )
      }
    
      ):null
    }
</ul>
  )
}

export default IncomeList;
