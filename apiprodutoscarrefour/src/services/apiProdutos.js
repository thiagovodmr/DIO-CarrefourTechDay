import axios from "axios";

const apiProdutos = axios.create({
    baseURL: "https://mercado.carrefour.com.br/api/catalog_system/pub/products/"
})

export default apiProdutos;