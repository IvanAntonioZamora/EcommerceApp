import CarWidget from "../CarWidget/CarWidget"
const Navbar = () =>{
    return(
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <img className="me-3" src="img\ico\disco-de-vinilo.png" alt="Logo" width="60" height="52" />
                    <span className="fs-4">Store App</span>
                </a>
                <ul className="nav nav-pills">
                    <li className="nav-item"><a href="index.html" className="nav-link active" aria-current="page">Home</a></li>
                    <li className="nav-item"><a href="index.html" className="nav-link">Lista de Vinilos</a></li>
                    <li className="nav-item"><a href="index.html" className="nav-link">Por Genero</a></li>
                    <li className="nav-item"><a href="index.html" className="nav-link">Contacto</a></li>
                    <li className="nav-item"><a href="index.html" className="nav-link"><CarWidget /></a></li>
                </ul>
            </header>
        </div>
    )
}

export default Navbar