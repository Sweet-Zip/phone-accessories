import React, { useRef } from 'react'
import { Card } from 'react-bootstrap';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { Link } from 'react-router-dom';
import '../css/styles.css'

const ItemsListHorizontal = ({ products }) => {
    const productListRef = useRef(null);

    const scroll = (scrollOffset) => {
        if (productListRef.current) {
            const list = productListRef.current;
            list.scrollBy({
                left: scrollOffset,
                behavior: 'smooth',
                inline: 'end',
            });
        }
    };

    return (
        <div className="product-list-container">
            <button onClick={() => scroll(-200)} className="scroll-button-left">
                <ArrowBackIosNewRoundedIcon sx={{ fontSize: 40 }} />
            </button>
            <div className="product-list py-3" ref={productListRef}>
                {products.map((product) => (
                    <div key={product.id} className="product-item product-card">
                        <Card className='h-100 w-[7rem] xs:w-[10rem] sm:w-[12rem] md:w-[14rem] lg:w-[16rem]'>
                            <Card.Img
                                variant="top"
                                className='img-fluid object-contain h-75'
                                src={product.image}
                                alt={product.name}
                            />
                            <Card.Body>
                                <Card.Title className='text-sm xs:text-sm sm:text-sm md:text-base lg:text-lg font-bold truncate-text'>
                                    {product.name}
                                </Card.Title>
                                <Card.Subtitle style={{ color: 'red'}}>
                                    {product.price}
                                </Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
            <button onClick={() => scroll(200)} className="scroll-button-right">
                <ArrowForwardIosRoundedIcon sx={{ fontSize: 40 }} />
            </button>
        </div>
    )
}

export default ItemsListHorizontal