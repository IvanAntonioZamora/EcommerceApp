import Item from "../Item/Item"

const ItemList = ({products}) => {
    return(
        <div className="container d-flex justify-content-center">
            {products.map(prod => <Item key={prod.id} product={prod} />)}
        </div>
    )
}

export default ItemList