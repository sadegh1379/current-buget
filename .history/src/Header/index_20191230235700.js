import React , {useContext} from "react";
import {HeaderContext} from '../Context';
import './header.css'

function Header() {
  const {income , expenses} = useContext()
  return(
    <div className="header text-center">
        <h1 className="text-white pt-4">Current Budget</h1>
    </div>
  );
}
export default Header;
