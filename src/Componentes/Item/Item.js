import Counter from "../Counter/Counter"
import CarWidget from "../CarWidget/CarWidget"

const Item = ({product}) =>{
    return(
        <div className="card" style={{ width: "18rem"}}>
            <img src={product.thumbnailUrl} className="card-img-top" alt={product.title} />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <button className="btn btn-secondary btn-sm ms-3" type="button">Ver Detalle</button>
                    <p className="card-text">Stock disponible: {product.stock}</p>
                    <Counter stock={product.stock} onAdd={CarWidget}/>
                </div>
        </div>       
    )
}

export default Item