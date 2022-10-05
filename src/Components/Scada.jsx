import React from "react";
import Card from "./Card";
import FetteSvg from "../Components/svgComponents/fette";
import LoeschSvg from "../Components/svgComponents/loesch";
import T800Svg from "../Components/svgComponents/t800";
import Ma357Svg from "../Components/svgComponents/ma357";

function Scada(props) {
  return (
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
    </div>
  );
}

export default Scada;
