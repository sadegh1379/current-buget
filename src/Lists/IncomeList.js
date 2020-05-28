import React , { useContext } from "react";
import {InputContext} from '../Context';
import "./index.scss";

function IncomeList({income}) {
  const { handleDeleteIncome } = useContext(InputContext);

  return(
    <ul className="list-group-item text-center"><h3  className="text-success">Income</h3>
   
    {income? income.map(
      (inc , index)=>{
        return(
          
          <li key={index} index={index} className="list-group-item border-secondary">
                <i onClick={()=>{handleDeleteIncome(index)}} className="fa fa-trash float-left text-danger my-1" style={{cursor:'pointer'}}></i>
                <span className="h5">{inc.description }</span>   :  {inc.amount}
          </li>
        )
      }
    
      ):null
    }
</ul>
  )
}

export default IncomeList;
