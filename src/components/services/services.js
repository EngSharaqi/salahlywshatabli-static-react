import React from 'react';
import '../styles/favorite.css';
import '../styles/services.css';
import coverImg from '../imgs/cover-services.jpg'
import servsICover from '../imgs/service-cleaning.jpg'
import servsIICover from '../imgs/service-carpenter.jpg'
import servsIIICover from '../imgs/service-electric.jpg'
import servsIIIICover from '../imgs/service-plumbing.jpg'

var Services = () => {

    var cover = { 'background-image': `url('${coverImg}')`, 'background-size': 'cover' }
    var coverI = { 'background-image': `url('${servsICover}')`, 'background-size': 'cover' }
    var coverII = { 'background-image': `url('${servsIICover}')`, 'background-size': 'cover' }
    var coverIII = { 'background-image': `url('${servsIIICover}')`, 'background-size': 'cover' }
    var coverIIII = { 'background-image': `url('${servsIIIICover}')`, 'background-size': 'cover' }
    return (
        <div className='row fav services'>
            <div className='back-img' style={cover}></div>
            <div className='container main'>
                <h4>Choose The Service</h4>
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
                                                    <i></i>
                                                    <h6>Cleaning Services</h6>
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
                                                    <i></i>
                                                    <h6>Electricity Services</h6>
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
                                                    <i></i>
                                                    <h6>Carpentry Services</h6>
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
                                                    <i></i>
                                                    <h6>Plumbing Services</h6>
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
