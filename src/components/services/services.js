import React from 'react';
import '../styles/favorite.css';
import '../styles/services.css';

// cover image
import coverImg from '../imgs/cover-services.jpg'

// service card covers
import servsICover from '../imgs/service-cleaning.jpg'
import servsIICover from '../imgs/service-carpenter.jpg'
import servsIIICover from '../imgs/service-electric.jpg'
import servsIIIICover from '../imgs/service-plumbing.jpg'

// services icons
import clean from '../imgs/cleaning.svg'
import electricity from '../imgs/electricity.svg'
import carpenter from '../imgs/carpenter.svg'
import plumbing from '../imgs/plumbing.svg'

import { useTranslation } from "react-i18next";

var Services = () => {
    const { t } = useTranslation();

    var cover = { 'background-image': `url('${coverImg}')`, 'background-size': 'cover' }
    var coverI = { 'background-image': `url('${servsICover}')`, 'background-size': 'cover' }
    var coverII = { 'background-image': `url('${servsIICover}')`, 'background-size': 'cover' }
    var coverIII = { 'background-image': `url('${servsIIICover}')`, 'background-size': 'cover' }
    var coverIIII = { 'background-image': `url('${servsIIIICover}')`, 'background-size': 'cover' }
    return (
        <div className='row fav services'>
            <div className='back-img' style={cover}></div>
            <div className='container main'>
                <h4>{t('ChooseService')}</h4>
                {/* choose the service */}
                <div className='row choose-service' style={{ 'background-color': '#fff' }}>
                    <div className='container'>
                        <div className='fav services'>

                            <div className='container main services-main'>
                                <div className='row'>
                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                                        <a href='#'>
                                            <div className='card'>
                                                <div className='cover cover-serv' style={coverI}></div>
                                                <div className='card-txt'>
                                                    <p className='serviceIcon'><img src={clean} /></p>
                                                    <h6>{t('cleaning')}</h6>
                                                    <p>It is a long established fact that a reader will be</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                                        <a href='#'>
                                            <div className='card'>
                                                <div className='cover cover-serv' style={coverII}></div>
                                                <div className='card-txt'>
                                                    <p className='serviceIcon'><img className='elecIcon' src={electricity} /></p>
                                                    <h6>{t('electricity')}</h6>
                                                    <p>It is a long established fact that a reader will be</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                                        <a href='#'>
                                            <div className='card'>
                                                <div className='cover cover-serv' style={coverIII}></div>
                                                <div className='card-txt'>
                                                    <p className='serviceIcon'><img src={carpenter} /></p>
                                                    <h6>{t('carpenter')}</h6>
                                                    <p>It is a long established fact that a reader will be</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                                        <a href='#'>
                                            <div className='card'>
                                                <div className='cover cover-serv' style={coverIIII}></div>
                                                <div className='card-txt'>
                                                    <p className='serviceIcon'><img className='elecIcon' src={plumbing} /></p>
                                                    <h6>{t('plumbing')}</h6>
                                                    <p>It is a long established fact that a reader will be</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
