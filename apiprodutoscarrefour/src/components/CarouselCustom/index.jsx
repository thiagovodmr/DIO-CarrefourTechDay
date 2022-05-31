import React from "react";
import "./styles.css";
import {Carousel, Row, Col} from "react-bootstrap";

function CarouselCustom({produtos}){
    return (
        <Carousel variant="dark">
            {produtos.map(produto => (
                <Carousel.Item key={produto.productId}>
                    <Row>
                        <Col md={{span:2 , offset:1}}>
                            <img 
                                className="d-block image-carousel"
                                src={produto.items[0].images[0].imageUrl}
                                alt={produto.productName}
                            />
                        </Col>
                        <Col md={6}>
                            <Carousel.Caption>
                                <h3>{produto.productTitle}</h3>
                                <p>{produto.metaTagDescription}</p>
                                <p>{produto.description}</p>   
                                <p className="preco">
                                    Preço: {produto.items[0].sellers[0].commertialOffer.Price}
                                </p>   
                            </Carousel.Caption>
                        </Col>
                    </Row> 
                </Carousel.Item>
                ))
            }
        </Carousel>
    )
} 

export default CarouselCustom;