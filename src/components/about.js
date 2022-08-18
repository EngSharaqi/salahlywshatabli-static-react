import React, { Component } from 'react';
import './styles/favorite.css'

import mainCoverImg from './imgs/cover-services.jpg'

import about from './imgs/about us.svg'
import aboutI from './imgs/aboutI.jpg'
import aboutII from './imgs/aboutII.jpg'

var About = () => {
    var mainCover = { 'background-image': `url('${mainCoverImg}')`, 'background-size': 'cover' }
    var span = { "color": "#f59f14" }
    var imgs = { "min-width": "30%", 'max-width': '60%', 'margin': '50px auto' }
    
    return (
        <div className='row fav'>
            <div className='back-img' style={mainCover}></div>
            <div className='container main'>
                <h4>About Us Sal7ly &amp; Shatbli</h4>
                <div className='row'>
                    <img style = {imgs} src={about} />
                </div>
                <p className='about-txt'><span style = { span }>Salhli and Shatbli</span> The first application in the Arab world that brings together the largest number of services fir application in the Arab world that brings together the largest number of servicesSalhali And Shatbli The first application in the Arab world that brings together the largest number of services fir application in the Arab world that brings together the largest number of servicesSalhali And Shatbli The first application in the Arab world that brings together the largest number of services fir application in the Arab world that brings together the largest number of servicesSalhali And Shatbli The first application in the Arab world that brings together the largest number of services fir application in the Arab world that brings together the largest number of servicesSalhali And Shatbli The first application in the Arab world that brings together the largest number of services fir application in the Arab world that brings together the largest number of servicesSalhali And Shatbli The first application in the Arab world that brings together the largest number of services fir application in the Arab world that brings together the largest number of services</p>
                <div className='row'>
                    <div className='col-xs-12 col-md'>
                        <img style={{ 'max-width': '100%', 'margin-top': '10px' }} src={aboutI} />
                    </div>
                    <div className='col-xs-12 col-md'>
                        <img style={{ 'max-width': '100%', 'margin-top': '10px' }} src={aboutII}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;