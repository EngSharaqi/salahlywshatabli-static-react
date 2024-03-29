import React from 'react';
import './styles/nav.css';
import './styles/footer.css';
import logo from './imgs/sws.png';
import { useTranslation } from 'react-i18next' 

var Footer = () => {
    const { t } = useTranslation();

    return (
        <div className='row nav footer'>
            <div className='container'>
                <div className='row'>
                   <div className='col-lg-4 xs-12 sm-12'>
                        <div className='row'><img src={logo} /></div>
                        <div className='row'><p>Lorem ipsum dolor sit amet consectetur<br /> adipiscing elit, sed do eiusmod tempor incididunt</p></div>
                        <div className='row'><h6>{t('footer.copyRight')}</h6></div>
                   </div>                   
                   <div className='col-lg-8 xs-12 sm-12'>
                        <div className='row'>
                            <div className='col-lg col-md col-sm col-xs-12'>
                                <h5>{t('footer.quickView')}</h5>
                                <ul>
                                    <li><a href="/">{t('footer.home')}</a></li>
                                    <li><a href="offer">{t('footer.services')}</a></li>
                                    <li><a href="about">{t('footer.aboutus')}</a></li>
                                    <li><a href="orders">{t('footer.contact')}</a></li>
                                </ul>
                            </div>
                            <div className='col-lg col-md col-sm col-xs-12'>
                                <h5>{t('footer.ourServices')}</h5>
                                <ul>
                                    <li>{t('footer.maintServs')}</li>
                                    <li>{t('footer.finshServs')}</li>
                                    <li>{t('footer.iAmProv')}</li>
                                </ul>
                            </div>
                            <div className='col-lg-5 col-xs-12 col-sm-12'>
                                <h5>{t('footer.contact')}</h5>
                                <ul>
                                    <li>{t('footer.phone')}: <a href='tel: +201023444476'>+201023444476</a></li>
                                    <li>{t('footer.email')}: <a href='mailto: int412@yahoo.com'>int412@yahoo.com</a></li>
                                    <li>{t('footer.address')}</li>
                                    <li class='social'>
                                        <a target="_blank" href='https://www.facebook.com/Sal7lyWshatbly'><i className="fab fa-facebook-f"></i></a> 
                                        <a target="_blank" href='/www.twitter.com'><i className="fab fa-twitter"></i></a> 
                                        <a target="_blank" href='www.youtube.com'><i className="fab fa-youtube"></i></a> 
                                        <a target="_blank" href='https://www.instagram.com/sal7lywshatbly/'><i className="fab fa-instagram"></i></a> 
                                        <a target="_blank" href='www.telegram.com'><i className="fab fa-telegram-plane"></i></a> 
                                        <a target="_blank" href='www.whatsapp.com'><i className="fab fa-whatsapp"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                   </div>                   
                </div>
            </div>
        </div>
    );
}

export default Footer;