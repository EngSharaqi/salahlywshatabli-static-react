import './styles/favorite.css';
import './styles/services.css';
import './styles/main.css';
import howto from './imgs/how to order.png'
import screens from './imgs/screens.png'

import int from './imgs/int logo.png'

import sliderICover from './imgs/header.jpg'
import sliderIICover from './imgs/header2.jpg'
import sliderIIICover from './imgs/header3.jpg'

import servsICover from './imgs/service-cleaning.jpg'
import servsIICover from './imgs/service-carpenter.jpg'
import servsIIICover from './imgs/service-electric.jpg'
import servsIIIICover from './imgs/service-plumbing.jpg'

// statistics icons
import clientSatesfied from './imgs/client satisfied.svg'
import fullfilliedOrders from './imgs/fulfilled orders.svg'
import finishingCompanies from './imgs/finishing companies.svg'
import servicesProviders from './imgs/service provider.svg'

var Main = () => {
    var intImg = { "background-image": `url("${int}")`, 'max-width' : '100px', 'margin': '10px auto', 'background-size': 'cover' }

    var sliderI = { "background-image": `url("${sliderICover}")`, 'max-height': '500px', 'width': '100%', 'max-height': '100%', 'background-size': 'cover' }
    var sliderII = { "background-image": `url("${sliderIICover}")`, 'max-height': '500px', 'width': '100%', 'max-height': '100%', 'background-size': 'cover' }
    var sliderIII = { "background-image": `url("${sliderIIICover}")`, 'max-height': '500px', 'width': '100%', 'max-height': '100%', 'background-size': 'cover' }

    var coverI = {'background-image': `url('${servsICover}')`, 'background-size': 'cover'}
    var coverII = {'background-image': `url('${servsIICover}')`, 'background-size': 'cover'}
    var coverIII = {'background-image': `url('${servsIIICover}')`, 'background-size': 'cover'}
    var coverIIII = {'background-image': `url('${servsIIIICover}')`, 'background-size': 'cover'}
    return (
        <div className='row main'>
            {/* Carrousel */}
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        {/* <img src={imgI} className="d-block w-100" alt="..." /> */}
                        <div className='sliderdivs' style={sliderI}></div>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Welcome to Sal7ly &amp; Shatbli</h5>
                            <p style = {{'width': '100%'}} >The first applictaion in the world that brings together largest number of services</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='sliderdivs' style={sliderII}></div>
                        {/* <img src="https://placeholder.photo/img/1350x550" className="d-block w-100" alt="..." /> */}
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p style = {{'width': '100%'}} >Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <div className='sliderdivs' style={sliderIII}></div>
                        {/* <img src="https://placeholder.photo/img/1350x550" className="d-block w-100" alt="..." /> */}
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p style = {{'width': '100%'}} >Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </button>
            </div>

            {/* Statistics bar */}
            <div className='row stat'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6'>
                            <p>
                                {/* <i class="fas fa-users"></i> */}
                                <img src={clientSatesfied} />
                            </p>
                            <h5>26.859</h5>
                            <small>Client statisfield</small>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6'>
                            <p>
                                {/* <i class="fas fa-shipping-fast"></i> */}
                                <img src={fullfilliedOrders} />
                            </p>                            
                            <h5>25.894</h5>
                            <small>fullfillied orders</small>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6'>
                            <p>
                                {/* <i class="fas fa-paint-roller"></i> */}
                                <img src={finishingCompanies} />
                            </p>
                            <h5>854</h5>
                            <small>finishing companies</small>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6'>
                            <p>
                                {/* <i class="fas fa-hands-helping"></i> */}
                                <img src={servicesProviders} />                                
                            </p>
                            <h5>978</h5>
                            <small>services provider</small>
                        </div>
                    </div>
                </div>
            </div>

            {/* choose the service */}
            <div className='row choose-service'>
                <div className='container'>
                    <div className='fav services'>

                        <div className='container main services-main'>
                            <h4>Choose The Service</h4>
                            <div className='row'>
                                <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                                    <a href='#'>
                                        <div className='card'>
                                            <div className='cover cover-serv' style = {coverI}></div>
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
                                            <div className='cover cover-serv' style = {coverII}></div>
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
                                            <div className='cover cover-serv' style = {coverIII}></div>
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
                                            <div className='cover cover-serv' style = {coverIIII}></div>
                                            <div className='card-txt'>
                                                <i></i>
                                                <h6>Plumbing Services</h6>
                                                <p>It is a long established fact that a reader will be</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <a href='/services' className='more'>
                                <button>More Services</button>
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            {/* Finishing Services */}
            <div className='row fav shatabli finishing-main'>
                <div className='container main finishing-main'>
                    <h4>Finishing Services</h4>
                    <div className='row'>
                        <div className='col-lg-4 col-md-4 col-sm-6 col-xs-12'>
                            {/* company card */}
                            <div className='card'>
                                <div className='cover com' style = {intImg}></div>
                                <h5>Royal Company</h5>
                                <p>For interior and exterior designs for interior and exterior designs ....</p>
                                {/* <ul>
                                    <li><i className="fas fa-map-marker-alt"></i> 2.0 KM</li>
                                    <li>4.5 <i className="fas fa-star"></i></li>
                                </ul>
                                <div className='buttons'>
                                    <button className='btn btn-success'>Order</button>
                                    <button className='btn btn-info'>More</button>
                                </div> */}
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-6 col-xs-12'>
                            {/* company card */}
                            <div className='card'>
                                {/* <p className='sale'>30% off</p> */}
                                <div className='cover com' style = {intImg}></div>
                                <h5>Artisan Company</h5>
                                <p>For interior and exterior designs for interior and exterior designs ....</p>
                                {/* <ul>
                                    <li><i className="fas fa-map-marker-alt"></i> 2.0 KM</li>
                                    <li>4.5 <i className="fas fa-star"></i></li>
                                </ul>
                                <div className='buttons'>
                                    <button className='btn btn-success'>Order</button>
                                    <button className='btn btn-info'>More</button>
                                </div> */}
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-6 col-xs-12'>
                            {/* company card */}
                            <div className='card'>
                                <div className='cover com' style = {intImg}></div>
                                <h5>Artisan Company</h5>
                                <p>For interior and exterior designs for interior and exterior designs ....</p>
                                {/* <ul>
                                    <li><i className="fas fa-map-marker-alt"></i> 2.0 KM</li>
                                    <li>4.5 <i className="fas fa-star"></i></li>
                                </ul>
                                <div className='buttons'>
                                    <button className='btn btn-success'>Order</button>
                                    <button className='btn btn-info'>More</button>
                                </div> */}
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            {/* Watch our video work */}
            <div className='row choose-service'>
                <div className='container'>
                    <div className='row fav services'>

                        <div className='container main services-main'>
                            <h4>Watch Our Video Work</h4>
                            <div className='row'>
                                <iframe className='watch' width="853" height="480" src="https://www.youtube.com/embed/ahy5o5nT4oI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* how to order */}
            <div className='howTo'>
                <h4>How to order from Sal7ly &amp; Shatbli</h4>
                <img src={howto} />
            </div>

            {/* screens from our app */}
            <div className='howTo screens'>
                <h4>Screens from our application</h4>
                <img src={screens} />
            </div>

            {/* What clients say */}
            {/* <div id="carouselExampleCaptions" className="carousel slide say" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://placeholder.photo/img/1350x550" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Welcome to Sal7ly &amp; Shatbli</h5>
                            <p>The first applictaion in the world that brings together largest number of services</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://placeholder.photo/img/1350x550" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://placeholder.photo/img/1350x550" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </button>
            </div> */}


            {/* subscribe our newsleter */}
            {/* <div className='row subscribe'>
                <div className='cover'>
                    <div className='overlay'>
                        <h4>Subscribe our Newsleter</h4>
                        <from methode='post'>
                            <input type='email' placeholder='Enter your E-mail' name='subscribe_mail' required />
                            <input type='submit' value='Subscribe' />
                        </from>
                    </div>

                </div>
            </div> */}

            {/* contact us */}
            {/* <div className='row subscribe contact'>
                <h4>Contact Us</h4>
                <div className='map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d863.2834406634589!2d31.33406292918558!3d30.061700059575447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e68fc4b15fb%3A0x917e22c62d752d3c!2z2LTYsdmD2Kkg2KfZitmHINis2LHZiNio!5e0!3m2!1sen!2seg!4v1653306571247!5m2!1sen!2seg" width={"100%"} height={"450"} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <form>
                    <h5>Contact From</h5>
                    <input type='text' placeholder='Your Name' name='main_name' />
                    <input type='email' placeholder='Email' name='main_mail' />
                    <input type='number' placeholder='Phone' name='main_phone' />
                    <textarea id="main_msg" name="main_msg" rows="4" cols="50" placeholder='Your Message'></textarea>
                    <input type='submit' value='send' />
                </form>
            </div> */}

        </div>
    );
}

export default Main;