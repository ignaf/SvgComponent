import React from "react";
import CardPng from "./CardPng";
import L3CustomerPlant from "../img/png/L3_bg100e096-028-02/p1gees1bil1ofb1dndle6nlhvj84.CUSTOMER PLANT.png";
import L3Stampa from "../img/png/L3_bg100e096-028-02/p1gees1bil1ofb1dndle6nlhvj84.layout_stampa.png";
import L3Model from "../img/png/L3_bg100e096-028-02/p1gees1bil1ofb1dndle6nlhvj84.Model.png";
import L5Stampa from "../img/png/L5_bb400f055-C21-03 161013/p1gees6eh01sle1h67t3itn61jd84.Layout_Stampa.png";
import L5Model from "../img/png/L5_bb400f055-C21-03 161013/p1gees6eh01sle1h67t3itn61jd84.Model.png";

function PlanosLineas(props) {
  return (
    <div className="contenedor contenedor--png ">
      <CardPng title="L3 Customer Plant" img={L3CustomerPlant} />
      <CardPng title="L3 Stampa" img={L3Stampa} />
      <CardPng title="L3 Model" img={L3Model} />
      <CardPng title="L5 Stampa" img={L5Stampa} />
      <CardPng title="L5 Model" img={L5Model} />
    </div>
  );
}

export default PlanosLineas;
