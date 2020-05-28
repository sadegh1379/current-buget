import React , {useContext} from "react";
import {HeaderContext} from '../Context';
import './header.css'

function Header() {
  const {income , expenses} = useContext(HeaderContext);
  return(
    <div className="header text-center">
        <h1 className="text-white pt-4">Current Budget</h1>
        <span className="badge badge-success"></span>
    </div>
  );
}
export default Header;
