import {Link} from 'react-router-dom'

const Home = () =>{
    return(
        <>
        <div className="row flex-lg-row-reverse align-items-center mx-1 vh-100">
            <div className="col-10 col-sm-8 col-lg-6">
                <img src="../img/assets/3971224.jpg" className="d-block mx-lg-auto img-fluid vh-100" alt="Bootstrap Themes" width="700" loading="lazy" />
            </div>
            <div className="col-lg-6">
                <h3 className="display-5 fw-bold lh-1 mb-3">Store Vinilos App</h3>
                <p className="lead">Un disco como toda obra de arte es para disfrutarse ¡Siempre!<br/>Tener un vinilo, es revivir ese momento una y otra vez</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <Link to='/list' type="button" className="btn btn-primary btn-lg px-4 me-md-2">Checa nuestro catalogo</Link>
                    <Link to='/category' type="button" className="btn btn-outline-secondary btn-lg px-4">Catalogo por Genero</Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home