import React from "react";
import AdvantageCard from "../atoms/AdvantageCard";
import { Box } from "@mui/material";
import fastness from "/Fastness.png"
import helpfulness from "/Helpfulness.png"
import stability from "/Stability.png"

export default function Advantages() {
    const card1 = <AdvantageCard advImg={fastness} advName="Скорость" advDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt gravida pulvinar. Donec aliquam felis massa, eget interdum eros ullamcorper vitae."/>
    const card2 = <AdvantageCard advImg={helpfulness} advName="Поддержка" advDesc="Praesent non interdum sem. Cras est tortor, hendrerit a sagittis sed, ultricies elementum magna. Aliquam erat volutpat. Aenean vulputate maximus venenatis."/>
    const card3 = <AdvantageCard advImg={stability} advName="Стабильность" advDesc="Cras tempor, odio ac ornare lacinia, leo leo sollicitudin nunc, ut pretium velit purus vel neque. Ut tincidunt metus in sem pellentesque consequat."/>
    const cards = <Box className="AdvCard-container">{card1}{card2}{card3}</Box>


    return (
    <section className="Advantages">
      <div className="container">
        <h1 className="section-title">За что нас ценят больше всего</h1>
        {cards}
      </div>
    </section>  
  );
}