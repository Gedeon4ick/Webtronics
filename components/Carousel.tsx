import Slider from './ReviewComponent/Slider';
import Slider2 from './ReviewComponent/Slider2';
import { useState } from 'react';
import styles from '../components/ReviewComponent/Slider.module.scss'

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState([1,2,3]);
  const [offset, setOffset] = useState(0);
  const slides = [<Slider/>, <Slider2/>, <Slider/>, <Slider/>, <Slider2/>];
  const clones = [<Slider/>, <Slider/>];

  const handleNext = () => {
    setCurrentSlide([currentSlide[1],currentSlide[2],currentSlide[2]+1 === slides.length ? 0 : currentSlide[2]+1]);
  };

  const handlePrev = () => {
    setCurrentSlide([currentSlide[0]-1 === -1 ? slides.length-1 : currentSlide[0]-1,currentSlide[0],currentSlide[1]]);
  };

  return (
    <div > 
      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>
      <div className={styles.allContainer}>
        <div style={{
              transform: `translateX(${offset}px)`
                        }} className={styles.slider}>
            {clones.map((slide, i) => (
            <div key={i}>{slide}</div>
            ))}
            {currentSlide.map((slide, i) => (
            <div key={i}> {slides[slide]}</div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
