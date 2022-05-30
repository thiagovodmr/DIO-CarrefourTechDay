import React from "react";
import "./styles.css";
import Cabecalho from "../Cabecalho";
import ListaLojas from "../ListaLojas";

function Home(){
    return (
        <div>
           <Cabecalho />
            <ListaLojas />
        </div>
    )
}

export default Home;