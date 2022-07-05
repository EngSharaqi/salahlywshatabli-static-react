import React, { Component } from 'react';
import './styles/favorite.css'

var About = () => {
    var span = { "color": "#f59f14" }
    var imgs = { "width": "100%" }
    return (
        <div className='row fav'>
            <div className='back-img'></div>
            <div className='container main'>
                <h4>About Us Sal7ly &amp; Shatbli</h4>
                <div className='row'>
                    <img src='https://placeholder.photo/img/500x300' />
                </div>
                <p className='about-txt'><span style = { span }>Salhli and Shatbli</span> The first application in the Arab world that brings together the largest number of services fir application in the Arab world that brings together the largest number of servicesSalhali And Shatbli The first application in the Arab world that brings together the largest number of services fir application in the Arab world that brings together the largest number of servicesSalhali And Shatbli The first application in the Arab world that brings together the largest number of services fir application in the Arab world that brings together the largest number of servicesSalhali And Shatbli The first application in the Arab world that brings together the largest number of services fir application in the Arab world that brings together the largest number of servicesSalhali And Shatbli The first application in the Arab world that brings together the largest number of services fir application in the Arab world that brings together the largest number of servicesSalhali And Shatbli The first application in the Arab world that brings together the largest number of services fir application in the Arab world that brings together the largest number of services</p>
                <div className='row'>
                    <div className='col'>
                        <img style = {imgs} src='https://placeholder.photo/img/530x330' />
                    </div>
                    <div className='col'>
                        <img style = {imgs} src='https://placeholder.photo/img/530x330' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;