import React from "react";
import "./styles.css";
import {ListGroup, Container, Alert} from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ListaLojas(){
    const lojas = useSelector((state) => state.allLojas.lojas);
    const cep = useSelector((state) => state.allLojas.cep);
    const error = useSelector((state) => state.allLojas.error);

    return (
        <Container className="lista-lojas-container">
            <h1>Lista dos pontos mais próximos do seu CEP: {cep!==0 && cep}</h1>

            <ListGroup as="ol" numbered >
                {lojas.length > 0 ? lojas.map(loja => (
                    <ListGroup.Item key={loja.id} as="li" className="d-flex justify-content-between align-items-start">
                        {loja.name}
                        <Link className="btn btn-primary" to={`detalhes/${loja.id}`}>
                            Ver Produtos
                        </Link>
                    </ListGroup.Item>
                )): !error.active &&
                    <Alert key="danger" variant="info">Digite o CEP</Alert>
                }
            </ListGroup>

            {error.active && 
                <Alert key="danger" variant="danger">{error.message}</Alert>
            }
        </Container>
    )
}

export default ListaLojas;