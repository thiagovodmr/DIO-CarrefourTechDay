import React from "react";
import "./styles.css";
import {Navbar, Container} from "react-bootstrap";
import FormBuscaCEP from "../FormBuscaCEP";



function Cabecalho({ cep, dispatch }){
    return (
        <Navbar bg="light" variant="light"> 
        <Container>
            <Navbar.Brand href="/">
                <img
                    src="https://carrefourbr.vtexassets.com/arquivos/logo-carrefour-site.png"
                    className="d-inline-block align-top"
                    alt="logo"
                />
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Pesquise as lojas mais próximas pelo CEP:
                </Navbar.Text>
            </Navbar.Collapse>

            <FormBuscaCEP />
        </Container>
    </Navbar>
        
    )
}

export default Cabecalho;