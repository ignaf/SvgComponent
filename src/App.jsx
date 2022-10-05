import React from "react";
import Card from "./Components/Card";
import CardPng from "./Components/CardPng";
import FetteSvg from "./Components/svgComponents/fette";
import LoeschSvg from "./Components/svgComponents/loesch";
import T800Svg from "./Components/svgComponents/t800";
import Ma357Svg from "./Components/svgComponents/ma357";
import L3CustomerPlant from "./img/png/L3_bg100e096-028-02/p1gees1bil1ofb1dndle6nlhvj84.CUSTOMER PLANT.png";
import L3Stampa from "./img/png/L3_bg100e096-028-02/p1gees1bil1ofb1dndle6nlhvj84.layout_stampa.png";
import L3Model from "./img/png/L3_bg100e096-028-02/p1gees1bil1ofb1dndle6nlhvj84.Model.png";
import L5Stampa from "./img/png/L5_bb400f055-C21-03 161013/p1gees6eh01sle1h67t3itn61jd84.Layout_Stampa.png";
import L5Model from "./img/png/L5_bb400f055-C21-03 161013/p1gees6eh01sle1h67t3itn61jd84.Model.png";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="contenedor ">
        <Card title="Comprimidora">
          <FetteSvg />
        </Card>
        <Card title="Envolvedora">
          <LoeschSvg />
        </Card>
        <Card title="Entubadora">
          <T800Svg />
        </Card>
        <Card title="Estuchadora">
          <Ma357Svg />
        </Card>
        {/* <CardPng title="L3 Customer Plant" img={L3CustomerPlant} />
        <CardPng title="L3 Stampa" img={L3Stampa} />
        <CardPng title="L3 Model" img={L3Model} />
        <CardPng title="L5 Stampa" img={L5Stampa} />
        <CardPng title="L5 Model" img={L5Model} /> */}
      </div>
    </React.Fragment>
  );
}

export default App;
