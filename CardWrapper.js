import Card1 from "./card1";
import Card2 from "./card2";
import './cardwrapper.css';

function CardWrapper(){
    return(
        <div classname="card-wrapper">
            <Card1/>
            <Card2/>
        </div>
    )
}

export default CardWrapper;