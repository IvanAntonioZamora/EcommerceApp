import { Link } from 'react-router-dom'

const Item = ({id, albumId, title, artist, genero, description, url, thumbnailUrl, price, stock}) =>{


    return(
        <div className="mx-2 mt-2 card-group" style={{width: "390px"}}>
            <div className="card text-start mb-3">
                <div className="row g-0">
                    <div className="col-6 col-md-6">
                        <img src="../img/assets/Música.jpg" className="card-img-top" alt={title} style={{width: "12rem",height: "13rem"}}/>
                    </div>
                    <div className="col-6 col-md-6 card-body d-flex flex-column justify-content-between">
                            <div>
                                <h5 className="card-title pb-1">{title}</h5>
                                <h6 className="card-subtitle text-muted mb-2">{genero}</h6>
                            </div>
                            <div>
                                <p className="fst-italic card-text mb-3">Artista: {artist}</p>
                            </div>
                            <div className="d-flex justify-content-end">
                                <Link to={`/detail/${id}`} className="btn btn-outline-primary btn-sm">Ver Detalle</Link>
                            </div>
                    </div>
                    <div className="card-footer">
                        <p className="card-text text-center">Stock disponible: {stock}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item