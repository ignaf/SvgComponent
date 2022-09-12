import Card from "./Components/Card";
import "./App.css";
import React from "react";
import { ReactComponent as Fette } from "./img/Fette.svg";
import { ReactComponent as Loesch } from "./img/Loesch.svg";
import { ReactComponent as Ma357 } from "./img/MA357.svg";
import { ReactComponent as T800 } from "./img/T800.svg";

function App() {
  return (
    <React.Fragment>
      <div className="contenedor">
        <Card title="Comprimidora">
          <Fette />
        </Card>
        <Card title="Envolvedora">
          <Loesch />
        </Card>
        <Card title="Entubadora">
          <T800 />
        </Card>
        <Card title="Estuchadora">
          <Ma357 />
        </Card>
      </div>
    </React.Fragment>
  );
}

export default App;
