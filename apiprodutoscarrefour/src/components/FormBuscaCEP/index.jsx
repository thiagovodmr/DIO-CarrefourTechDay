import React, { useCallback, useEffect } from "react";
import "./styles.css";
import {Form, FormControl, Button} from "react-bootstrap";
import apiPontosVenda from "../../services/apiPontosVenda";
import { useDispatch, useSelector } from "react-redux";
import {getLojas, setCep, setError} from "../../redux/actions/lojasActions";

function FormBuscaCEP(){
    const dispatch = useDispatch();
    const cep = useSelector((state) => state.allLojas.cep)

    const getAllLojas = useCallback((event = null)=>{
        if(event !== null){
            event.preventDefault();
            const cep =  event.target[0].value;
            dispatch(setCep(cep));

            apiPontosVenda.get(`regions?country=BRA&postalCode=${cep}`)
            .then(response=> {
                dispatch(setError({ active: false, message: ``,}));
                dispatch(getLojas(response.data))
            }).catch(error=> {
                dispatch(setError({
                    active: true,
                    message: `Não foi possível carregar os dados a partir deste CEP: (${!cep ? "Vazio" : cep}) , verifique e tente novamente`
                }));
            })
        }
    }, [cep])

    useEffect(()=>{
        getAllLojas();
    },[getAllLojas])

    return (
        <Form className="d-flex" onSubmit={event => getAllLojas(event) }>
            <FormControl
                type="search"
                placeholder="digitar CEP ex: 14801788"
                className="me-2"
                aria-label="Search"
            />
            <Button variant="outline-success" type="submit">Pesquisar</Button>
        </Form>
    )
}

export default FormBuscaCEP;