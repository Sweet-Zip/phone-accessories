import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageSlider = ({ images }) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {images.map((image, idx) => (
                <Carousel.Item key={idx}>
                    <img
                        className="d-block w-full h-80 object-cover"
                        src={image}
                        alt={`Slide ${idx + 1}`}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default ImageSlider;
