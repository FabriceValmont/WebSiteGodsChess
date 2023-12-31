import React, { Component } from 'react';

class Carrousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  nextSlide = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % this.props.slides.length,
    }));
  };

  prevSlide = () => {
    this.setState((prevState) => ({
      currentIndex:
        prevState.currentIndex === 0
          ? this.props.slides.length - 1
          : prevState.currentIndex - 1,
    }));
  };

  render() {
    const { slides } = this.props;
    const { currentIndex } = this.state;

    return (
      <div className="carousel relative">
        <div className="carousel-inner flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-slide w-full ${
                index === currentIndex ? 'active' : 'hidden'
              }`}
            >
              <div className="mx-auto h-full flex items-center justify-center">
                {slide}
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute bottom-[1rem] right-1/2 transform -translate-x-1/2 text-white text-2xl"
          onClick={this.prevSlide}
        >
          Précédent
        </button>
        <button
          className="absolute bottom-[1rem] left-1/2 transform translate-x-1/2 text-white text-2xl"
          onClick={this.nextSlide}
        >
          Suivant
        </button>
      </div>
    );
  }
}

export default Carrousel;
