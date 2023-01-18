import ItemListContainer from "./ItemListContainer";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
const NavBar =() => {
    return(
        <header>
            <div className="containerBrand">
                <h1>gamers</h1>
            </div>

            <nav className="containerItemlist">
                <ItemListContainer 
                itemUno = 'procesadores'
                itemDos = 'Motherboards'
                itemTres = 'Fuentes'
                itemCuatro = 'Placas de viddeo'
                />
            </nav>

            <div className="containerCard">
                <FontAwesomeIcon icon={faCartShopping}/>
                <span className="cantCard">
                1
            </span>
            </div>
        </header>
    )
}

export default NavBar;