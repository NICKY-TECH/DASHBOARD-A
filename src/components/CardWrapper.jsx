import "../styles/destination.css";
import Card from "./Card";
import {    greenRating,
    redRating,
    icon4,
    icon3,
    icon2,
    icon1,
    upRed,
    upGreen} from ".."

function CardWrapper (){
    return <section className="card-wrapper">
<div className="inner-container-car">
<Card  topIcon={icon1} indicator={upGreen} label="Total Order" amount="$350.000" rate={greenRating}/>
</div>
<div className="inner-container-car">
<Card  topIcon={icon1} indicator={upRed} label="Total Refund" amount="$27.000" rate={redRating}/>
</div>

<div className="inner-container-car">
<Card  topIcon={icon1} indicator={upRed} label="Average Sales" amount="$1567.000" rate={redRating}/>
</div>
<div className="inner-container-car">
<Card  topIcon={icon1} indicator={upGreen} label="Total Income" amount="$350.000" rate={greenRating}/>
</div>

    </section>
}

export default CardWrapper;