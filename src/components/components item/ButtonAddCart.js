import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

const ButtonAddCart = () => {
    return(
        <button id="AddCart">
            <FontAwesomeIcon icon={faCartShopping}/>
        </button>
    )
}

export default ButtonAddCart;