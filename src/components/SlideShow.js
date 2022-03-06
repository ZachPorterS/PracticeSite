import react, { useState } from 'react';
import { images } from './imageData';
import '../styles/SlideShow.css';

const SlideShow = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      {images.map((slide, index) => {
        return (
          <img src={slide.image} alt='bakery-image' className='image' />
        );
      })}
    </section>
  );
}

export default SlideShow;