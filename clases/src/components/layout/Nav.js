import { Link } from "react-router-dom";

import (Link)

const Nav = (props) => {
    return (
     <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/ejemplo1">ejemplo 1</Link></li>
            <li><Link to="/ejemplo2">Ejemplo 2</Link></li>
            <li><Link to="/ejemplo3">Ejemplo 3</Link></li>
            <li><Link to="/ejemplo4">Json</Link></li>
        </ul>
     </nav>
    )
}
export default Nav; 