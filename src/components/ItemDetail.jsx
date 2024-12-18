
import '../styles/ItemDetail.css'
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
    return (
        <div className="item-detail">
            <img src={item?.image} alt={item?.title} className="item-image" />
            <div className="item-info">
                <h2 className="item-name">{item?.title}</h2>
                <p className="item-description">{item?.description}</p>
                <p className="item-price">${item?.price}</p>
            </div>
            <ItemCount item={item}/>
        </div>
    );
};

export default ItemDetail;
