import axios from "axios";

const apiPontosVenda = axios.create({
    baseURL: "https://mercado.carrefour.com.br/api/checkout/pub/"
})

export default apiPontosVenda;