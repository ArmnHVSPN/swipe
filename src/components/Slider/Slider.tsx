import logo from '../../assets/logo/logo.svg';
import webflow from '../../assets/logo/webflow.svg'
import './slider.scss';

export const Slider = () => {
    return (
        <section className="slider">
            <div className="slider__wrapper">
            <div className="slider__slide"><img src={webflow} alt="webflow" /></div>
            <div className="slider__slide"><img src={logo} alt="logo" /></div>
            <div className="slider__slide"><img src={webflow} alt="webflow" /></div>
            <div className="slider__slide"><img src={logo} alt="logo" /></div>
            </div>
        </section>
    )
}