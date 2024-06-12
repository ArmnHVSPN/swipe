import twitter from '../../../assets/icons/social/twitter.svg';
import inst from '../../../assets/icons/social/instagramm.svg';
import facebook from '../../../assets/icons/social/facebook.svg';
import './content.scss';

export const HeaderContent = () => {
    return (
        <section className="content">
            <div className="content__wrapper">
                <div className="content__main">
                    <h1 className="content__title">Accessible way to start your business</h1>
                    <h2 className="content__subtitle">Simple. Customizable. Stylish.</h2>
                    <button className="content__btn">Get demo for free</button>
                    <a href="#" className="content__link">watch full video</a>
                </div>
                <div className="content__social">
                    <img src={twitter} alt="twitter" />
                    <img src={inst} alt="inst" />
                    <img src={facebook} alt="facebook" />
                </div>
            </div>
        </section>
    )
}