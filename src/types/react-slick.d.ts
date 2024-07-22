declare module 'react-slick' {
    import { Component, ReactNode } from 'react';

    interface Settings {
        dots?: boolean;
        infinite?: boolean;
        speed?: number;
        slidesToShow?: number;
        slidesToScroll?: number;
        autoplay?: boolean;
        autoplaySpeed?: number;
        arrows?: boolean;
        prevArrow?: ReactNode;
        nextArrow?: ReactNode;
    }

    export default class Slider extends Component<Settings> {}
}
