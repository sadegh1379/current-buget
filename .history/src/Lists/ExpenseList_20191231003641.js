import React , { useContext }  from "react";
import {InputContext} from '../Context';
import "./index.scss";

function ExpenseList({expense}) {
   const { handleDeleteExpense } = useContext(InputContext);
  return(
    <ul className="list-group-item text-center"><h3 className="text-danger">Expenses</h3>
   
        {expense? expense.map(
          (ex , index)=>{
            return(
          <li index={index} key={index} className="list-group-item  border-secondary">
             <i className="fa fa-trash float-left text-danger my-1" style={{cursor:'pointer'}}></i>
            <span className="h5">{ex.description }</span> :  {ex.amount}</li>
            )
          }
        
          ):null
        }
    </ul>
  );
}

export default ExpenseList;
