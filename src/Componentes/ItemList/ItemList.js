import Item from "../Item/Item"

const ItemList = ({products}) => {
    return(
        <div className="d-flex justify-content-center justify-content-md-start flex-wrap mx-3">
            {products.map(prod => <Item key={prod.id} product={prod} />)}
        </div>
    )
}

export default ItemList