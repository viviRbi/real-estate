import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = (props) => (
  <header className="header">
    <ul onClick={(e) => props.navHandle(e)} type={props.type}>
      <section>
        {console.log(props.type)}
        <Link to={`/list/${props.type}`}><button>Buy</button></Link>
        <Link to={`/list/${props.type}`}><button>Rent</button></Link>
        <Link to={`/list/${props.type}`}><button>All</button></Link>
      </section>

      <section>
        <Link to="/save"><button>Save</button></Link>
        <button>Login</button>
      </section>
    </ul>

  </header>
)
export default Header;