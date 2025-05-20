import React from "react";

function AdvantageCard(props)
{
    const {advImg, advName, advDesc} = props
    return(
        <div className="AdvCard">
            <img className="AdvCardImg" src={advImg} alt={advImg.toString()}></img>
            <h3 className="AdvCardTitle">{advName}</h3>
            <p className="AdvCardDesc">{advDesc}</p>
        </div>
    )
}

export default AdvantageCard;