import React from 'react';
import Carousel from '../Carousel';


const BannerSlide = () => {

    const arrImg = [
        { img: '/banner1.jpg' },
        { img: '/banner2.jpg' },
        { img: '/banner3.jpg' }
    ]
    return (
        <Carousel
            items={arrImg}
            autoSlide={false}
        />
    )
}

export default BannerSlide;