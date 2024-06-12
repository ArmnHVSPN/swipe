import logo from '..//../assets/logo/logo.svg' ;
import { HeaderContent } from './HeaderContent/HeaderContent';
import './header.scss';

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__logo"><img src={logo} alt="logo" /></div>
                    <nav className="header__navigation">
                        <a href="#" className="header__navigation_link">About</a>
                        <a href="#" className="header__navigation_link">Features</a>
                        <a href="#" className="header__navigation_link">Pricing</a>
                        <a href="#" className="header__navigation_link">Team</a>
                        <a href="#" className="header__navigation_link">FAQ</a>
                        <a href="#" className="header__navigation_link">FeedBack</a>
                        <a href="#" className="header__navigation_link">Blog</a>
                        <a href="#" className="header__navigation_link">Contact</a>
                    </nav>
                    <div className="header__right">
                    <button className="header__btn">Buy now</button>
                    </div>
                </div>
                <HeaderContent/>
            </div>
        </header>
    )
}