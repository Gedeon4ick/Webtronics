import React, { useState } from 'react';

function MySlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        <div className="slide">Slide 1</div>,
        <div className="slide">Slide 2</div>,
        <div className="slide">Slide 3</div>
    ];

    const handleNext = () => {
        const nextSlide = currentSlide + 1;
        if (nextSlide === slides.length) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(nextSlide);
        }
    };

    const handlePrev = () => {
        const prevSlide = currentSlide - 1;
        if (prevSlide < 0) {
            setCurrentSlide(slides.length - 1);
        } else {
            setCurrentSlide(prevSlide);
        }
    };

    return (
        <div className="slider">
            {slides[currentSlide]}
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
        </div>
    );
}
