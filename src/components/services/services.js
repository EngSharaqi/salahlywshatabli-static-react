import React from 'react';
import '../styles/favorite.css';
import '../styles/services.css';

var Services = () => {
    return (
        <div className='row fav services'>
            <div className='back-img'></div>
            <div className='container main'>
                <h4>Choose The Service</h4>
                <div className='row'>
                    <div className='col-lg-3 col-xs-12 col-sm-6 col-md-3 serv-card'>
                        <a href='#'>
                            <div className='card'>
                                <div className='cover cover-serv'></div>
                                <div className='card-txt'>
                                    <i></i>
                                    <h6>Cleaning Services</h6>
                                    <p>It is a long established fact that a reader will be</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='col-lg-3 col-xs-12 col-sm-6 col-md-3 serv-card'>
                        <a href='#'>
                            <div className='card'>
                                <div className='cover cover-serv'></div>
                                <div className='card-txt'>
                                    <i></i>
                                    <h6>Cleaning Services</h6>
                                    <p>It is a long established fact that a reader will be</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='col-lg-3 col-xs-12 col-sm-6 col-md-3 serv-card'>
                        <a href='#'>
                            <div className='card'>
                                <div className='cover cover-serv'></div>
                                <div className='card-txt'>
                                    <i></i>
                                    <h6>Cleaning Services</h6>
                                    <p>It is a long established fact that a reader will be</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='col-lg-3 col-xs-12 col-sm-6 col-md-3 serv-card'>
                        <a href='#'>
                            <div className='card'>
                                <div className='cover cover-serv'></div>
                                <div className='card-txt'>
                                    <i></i>
                                    <h6>Cleaning Services</h6>
                                    <p>It is a long established fact that a reader will be</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
