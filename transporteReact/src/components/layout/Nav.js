import { NavLink } from 'react-router-dom'
import '../../styles/nav.css'

/* Importing the Link component from the react-router-dom library. */
// import { Link } from 'react-router-dom'

const Nav = (props) => {
    return (
        <nav>
            <ul className="holder">
                <li><NavLink to="/" className={({ isActive }) => isActive ? "activo" : undefined} > Home</NavLink></li>
                <li><NavLink to="/nosotros" className={({ isActive }) => isActive ? "activo" : undefined} >Nosotros</NavLink></li>
                <li><NavLink to="/servicios" className={({ isActive }) => isActive ? "activo" : undefined} >Servicios</NavLink></li>
                <li><NavLink to="/galeria" className={({ isActive }) => isActive ? "activo" : undefined} >Galeía</NavLink></li>
                <li><NavLink to="/contacto" className={({ isActive }) => isActive ? "activo" : undefined} >Contacto</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav