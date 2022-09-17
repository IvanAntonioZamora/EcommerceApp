import CarWidget from "../CarWidget/CarWidget"
import { Link,NavLink } from 'react-router-dom'

const Navbar = () =>{
    return(
        <div>
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom mx-3">
                <Link to='/' className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <img className="me-3" src="../img/ico/disco-de-vinilo.png" alt="Logo" width="60" height="52" />
                    <h1 className="fs-4">Store Vinilos App</h1>
                </Link>
                <ul className="nav nav-pills">
                    <li className="nav-item"><NavLink to='/' className="nav-link" aria-current="page">Home</NavLink></li>
                    <li className="nav-item"><NavLink to='/list' className="nav-link">Lista de Vinilos</NavLink></li>
                    <li className="nav-item"><NavLink to='/category' className="nav-link">Por Genero</NavLink></li>
                </ul>
                <CarWidget />
            </header>
        </div>
    )
}

export default Navbar