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
                <p className='about-txt'><span style = { span }>Salhli and Shatbli</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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