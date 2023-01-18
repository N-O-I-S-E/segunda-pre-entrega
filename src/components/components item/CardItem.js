import Description from "./Description";
import '../../styles/cardItem.css'
import Buttondetalles from "./Butondetalles";
import ButtonAddCart from "./ButtonAddCart";
import gpu from "../../img/gpu.png";

const CardItem = () => {
    return(
        <div className="cardItem">
            <Description title='Placa de video asus ROG'
                         cantidad = {5}
                         precio = {20000} />
            <div className="buttons">
                <Buttondetalles />
                <ButtonAddCart />
            </div>
        </div>
    )
}

export default CardItem;