import CarWidget from "../CarWidget/CarWidget"
import { Link } from 'react-router-dom'
const Navbar = ({product}) =>{
    return(
        <div>
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom mx-3">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <img className="me-3" src="../img/ico/disco-de-vinilo.png" alt="Logo" width="60" height="52" />
                    <h1 className="fs-4">Store Vinilos App</h1>
                </a>
                <ul className="nav nav-pills">
                    <li className="nav-item"><Link to='/' className="nav-link active" aria-current="page">Home</Link></li>
                    <li className="nav-item"><Link to='/list' className="nav-link">Lista de Vinilos</Link></li>
                    <li className="nav-item"><Link to='/category' className="nav-link">Por Genero</Link></li>
                    <li className="nav-item"><a href="index.html" className="nav-link">Contacto</a></li>
                    <li className="nav-item"><a href="index.html" className="nav-link"><CarWidget /></a></li>
                </ul>
            </header>
        </div>
    )
}

export default Navbar