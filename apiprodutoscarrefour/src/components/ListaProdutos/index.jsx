import React, { useCallback, useEffect} from "react";
import { useParams } from "react-router-dom";
import "./styles.css";
import apiProdutos from "../../services/apiProdutos"; 
import Cabecalho from "../Cabecalho";
import CarouselCustom from "../CarouselCustom";
import { useDispatch, useSelector } from "react-redux";
import { setProdutos } from "../../redux/actions/produtosActions";

function ListaProdutos(){
    const {lojaId} = useParams();
    const produtos = useSelector((state)=> state.allProdutos.produtos);
    const categorias = useSelector((state)=> state.allProdutos.categorias);
    const dispatch = useDispatch();

    const getProdutos = useCallback(()=>{
        apiProdutos.get(`search?fq=${lojaId}`)
        .then(response=> {
            dispatch(setProdutos(response.data));
        })
        .catch(error=>{console.log(error)})
    }, [lojaId])

    useEffect(()=>{
        getProdutos()
    },[getProdutos])

    

    return (
        <>
            <Cabecalho pesquisaPorCep={false}/>
            {categorias.map((categoria) => (
                <div key={categoria}>
                    <h1 className="text-center">{categoria}</h1>
                    <div className="produtos-container">
                        <CarouselCustom produtos={ produtos.filter((produto) => {
                            return produto.categories[2].includes(categoria)
                        }) }/>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ListaProdutos;