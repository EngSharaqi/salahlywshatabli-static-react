import React, { Component } from 'react';
import './styles/favorite.css';
import './styles/contact.css';

var Contact = () => {
    var styles = {
        "padding-left": 0
    }

    var border = {
        "border-right": "1px solid #bbb",
        "padding-bottom": "0"
    }

    return (
        <div className='row fav contact'>
            <div className='back-img'></div>
            <div className='container main'>
                <h4>Contact Us</h4>
                <div className='row'>
                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 right-border'>
                        <h5>Get In Touch</h5>
                        <div className='address'>
                            <h6>Address:</h6>
                            <p>17 El Batrawy St, Off Abbas El Akkad, Nasr City, Cairo.</p>
                        </div>

                        <div className='address'>
                            <h6>Phone:</h6>
                            <p>+44(20) 74057686 - 02345768896</p>
                        </div>

                        <div className='address'>
                            <h6>E-mails:</h6>
                            <p>int412@yahoo.com</p>
                        </div>
                        <ul>
                            <li class='social'>
                                <a href='/www.facebook.com'><i className="fab fa-facebook-f"></i></a>
                                <a href='/www.twitter.com'><i className="fab fa-twitter"></i></a>
                                <a href='/www.youtube.com'><i className="fab fa-youtube"></i></a>
                                <a href='/www.instagram.com'><i className="fab fa-instagram"></i></a>
                                <a href='/www.telegram.com'><i className="fab fa-telegram-plane"></i></a>
                                <a href='/www.whatsapp.com'><i className="fab fa-whatsapp"></i></a>
                            </li>
                        </ul>
                    </div>
                    {/* <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                        <h5>Contact Form</h5>
                        <form>
                            <div className='row'>
                                <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12' style={styles}>
                                    <input type='text' placeholder='Your Name' name='c_name' />
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12' style={styles}>
                                    <input type='number' placeholder='Phone' name='c_phone' />
                                </div>
                            </div>
                            <div className='row'>
                                <input type='email' placeholder='E-mail' name='c-mail' />
                            </div>
                            <div className='row'>
                                <textarea id="c_msg" name="c_msg" rows="4" cols="50" placeholder='Your Message'></textarea>
                            </div>
                            <div className='row'>
                                <input type='submit' value='Send' />
                            </div>
                        </form>
                    </div> */}
                </div>

            </div>
            <div className='container map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d863.2834406634589!2d31.33406292918558!3d30.061700059575447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e68fc4b15fb%3A0x917e22c62d752d3c!2z2LTYsdmD2Kkg2KfZitmHINis2LHZiNio!5e0!3m2!1sen!2seg!4v1653306571247!5m2!1sen!2seg" width={"100%"} height={"450"} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
}

export default Contact;