import Counter from "../Counter/Counter"
import CarWidget from "../CarWidget/CarWidget"

const ItemDetail = (products) =>{
    return (
        <>
            <h5 className="text-star" >Album: { products.title }</h5>
            <h5 className="text-star" >Artista: { products.artist }</h5>
            <h5 className="text-star" >Genero: { products.genero }</h5>
            <h5 className="text-star" >Precio: { products.price }</h5>
            <h5 className="text-star" >Stock: { products.stock }</h5>
            <h5 className="text-star" >Descripcion: { products.description }</h5>
            <Counter stock={products.stock} onAdd={CarWidget}/>         
        </>
    )
}

export default ItemDetail