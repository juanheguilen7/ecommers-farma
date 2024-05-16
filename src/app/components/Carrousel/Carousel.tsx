'use client'

import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';

import './carousel.scss'

interface CarouselProps {
    items: arr[];
    autoSlide?: boolean;
}

interface arr {
    text?: string;
    img?: string;
}


const Carousel: React.FC<CarouselProps> = ({ items, autoSlide = false }) => {

    const [index, setIndex] = useState(0);
    const [arrElement, setArrElement] = useState(items[0]);


    const next = useCallback(() => {
        const nextIndex = (index + 1) % items.length;
        setIndex(nextIndex);
        setArrElement(items[nextIndex]);
    }, [index, items]);


    const prev = useCallback(() => {
        const nextIndex = (index - 1 + items.length) % items.length;
        setIndex(nextIndex);
        setArrElement(items[nextIndex]);
    }, [index, items]);


    useEffect(() => {
        let timer: NodeJS.Timeout | null = null;

        const handleAutoSlide = () => {
            timer = setTimeout(() => {
                next();
            }, 4000);
        };

        if (autoSlide) {
            handleAutoSlide();
        }

        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [autoSlide, next]);

    return (
        <>
            {
                items[0]?.text ?
                    <p >
                        {arrElement.text}
                    </p>
                    : null
            }

            {autoSlide ? null : (
                <div className='carousel-image'>
                    <button onClick={() => { prev() }} type='button' className='carousel-button'>
                        <Image src='/icons/arrow-left.svg' alt='arrow left' width={35} height={35} />
                    </button>

                    {
                        items[0].img
                            ? <Image src={`${items[index].img}`} alt='banner image' width={300} height={300}  className='carousel-image-inner'/>
                            : null
                    }
                    <button onClick={() => { next() }} type='button' className='carousel-button'>
                        <Image src='/icons/arrow-right.svg' alt='arrow right' width={35} height={35} />
                    </button>
                </div>

            )}

        </>
    )
}

export default Carousel;