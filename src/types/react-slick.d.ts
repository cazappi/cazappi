declare module 'react-slick' {
  import { ComponentType, HTMLAttributes } from 'react';

  interface ResponsiveSettings {
    breakpoint: number;
    settings: {
      slidesToShow?: number;
      slidesToScroll?: number;
      infinite?: boolean;
      dots?: boolean;
    };
  }

  interface SliderProps extends HTMLAttributes<HTMLDivElement> {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    autoplay?: boolean;
    autoplaySpeed?: number;
    nextArrow?: JSX.Element;
    prevArrow?: JSX.Element;
    responsive?: ResponsiveSettings[];
  }

  const Slider: ComponentType<SliderProps>;

  export default Slider;
}
