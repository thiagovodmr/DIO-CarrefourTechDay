import React from "react";
import {Navbar, Container} from "react-bootstrap";
import "./styles.css";
import FormBuscaCEP from "../FormBuscaCEP";
import { Link } from "react-router-dom";



function Cabecalho({pesquisaPorCep = true}){
    return (
        <Navbar bg="light" variant="light"> 
        <Container>
            <Navbar.Brand>
                <Link to="/">
                    <img
                        src="https://carrefourbr.vtexassets.com/arquivos/logo-carrefour-site.png"
                        className="d-inline-block align-top"
                        alt="logo"
                    />
                </Link>    
            </Navbar.Brand>
            
            { pesquisaPorCep && 
                <>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Pesquise as lojas mais próximas pelo CEP:
                        </Navbar.Text>
                    </Navbar.Collapse>

                    <FormBuscaCEP />
                </>
            }
            
        </Container>
    </Navbar>
        
    )
}

export default Cabecalho;