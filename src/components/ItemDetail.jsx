
import '../ItemDetail.css'
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
    return (
        <div className="item-detail">
            <img src={item?.images[0]} alt={item?.title} className="item-image" />
            <div className="item-info">
                <h2 className="item-name">{item?.title}</h2>
                <p className="item-description">{item?.description}</p>
                <p className="item-price">${item?.price}</p>
                <button className="add-to-cart-btn">Agregar al carrito</button>
            </div>
            <ItemCount/>
        </div>
    );
};

export default ItemDetail;
