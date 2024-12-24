import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import logo from "../../assets/logo.svg";

function NavBar(props) {
  return (
    <nav className="flex flex-wrap">
      <div>
      <img className="w-40" src={logo} alt="Logo de la marca" />
      </div>
      <ul className="flex flex-wrap">
        <li>{props.item1}</li>
        <li>{props.item2}</li>
        <li>{props.item3}</li>
      </ul>
      <div className="w-5">
        <CartWidget />
      </div>
    </nav>
    
  )
}

export default NavBar;