import React, { Component } from 'react';
import './styles/orders.css';
import './styles/favorite.css';
import './styles/wallet.css';
import './styles/myOrders.css';

var MyOrders = () => {
    var fw = {
        "width": "100%"
    }

    
    var handleClickF = () => {
        var f = document.getElementById('fOrders'); //finishing order button
        var m = document.getElementById('mOrders'); // maintenance button
        var OC = document.getElementById('OC'); // finishing order card
        var MC = document.getElementById('MC'); // maintenance card

        OC.classList.add('visible');
        OC.classList.remove('inVisible');
        MC.classList.add('inVisible');
        MC.classList.remove('visible');

        f.classList.add('active');
        f.classList.remove('inActive');
        m.classList.add('inActive');
        m.classList.remove('active');
    }

    var handleClickM = () => {
        var f = document.getElementById('fOrders'); //finishing order button
        var m = document.getElementById('mOrders'); // maintenance button
        var OC = document.getElementById('OC'); // finishing order card
        var MC = document.getElementById('MC'); // maintenance card

        
        

        MC.classList.add('visible');
        MC.classList.remove('inVisible');
        OC.classList.add('inVisible');
        OC.classList.remove('visible');

        m.classList.add('active');
        m.classList.remove('inActive');
        f.classList.add('inActive');
        f.classList.remove('active');
    }

    var styles = {
        "height": "60px",
        "width": "60px",
        "border-radius": "50%",
        "background-size": "cover",
        "background-image": `url("https://placeholder.photo/img/60")`
    }
    return (
        <div className='row orders fav wallet myOrders'>
            <div className='back-img'></div>
            <div className='container main'>
                <h4>My Orders</h4>
                <div className='row buttons'>
                    <button onClick={handleClickF} id='fOrders' className='f'><a hre='#finishing_orders'>Finishing Orders</a></button>
                    <button onClick={handleClickM} id='mOrders' className='m'><a href='#maintenance_orders'>Maintenance Orders</a></button>
                </div>
                {/* Finishing Orders */}
                <div id='OC' className='row order-card visible'>
                    <div className='col-9 profile'>
                        <div className='row'>
                            <div className='profile'>
                                <div style={styles}></div>
                            </div>
                            <div className='col profile'>
                                <h5>Royal Trust CO.</h5>
                                <p>No. <span className='no'>#528</span></p>
                                <p>Date: <span className='no'>05/10/2021</span></p>
                            </div>
                        </div>
                    </div>
                    <div className='col price'>
                        <p>Preview Price: <span className='no'>30 EGP</span></p>
                    </div>
                    <div className='row alert-parent'>

                        {/* Status message (Contract Waiting || Schedule an inspection || Completed) */}
                        {/* Processing */}
                        <div class="alert alert-info" role="alert">Contract Waiting</div>

                        {/* Schedule an inspection */}
                        <div class="alert alert-warning" role="alert">Schedule an inspection</div>

                        {/* Completed */}
                        <div class="alert alert-success" role="alert">Completed</div>

                    </div>
                </div>
            
                {/* Maintenance */}
                <div id='MC' className='row order-card maintenance-card inVisible'>
                    <div id="maintenance_orders" className='row' style={ fw }>
                    <div className='col-9 profile'>
                        <div className='row'>
                            <div className='profile'>
                                <div style={styles}></div>
                            </div>
                            <div className='col profile'>
                                <h5>Mohamed Ashraf</h5>
                                <p>No. <span className='no'>#528</span></p>
                                <p>Date: <span className='no'>05/10/2021</span></p>
                            </div>
                        </div>
                    </div>
                    <div className='col price'>
                        <p>Preview Price: <span className='no'>30 EGP</span></p>
                    </div>
                    <div className='row alert-parent'>

                        {/* Status message (Contract Waiting || Schedule an inspection || Completed) */}
                        {/* Processing */}
                        <div class="alert alert-info" role="alert">Contract Waiting</div>

                        {/* Schedule an inspection */}
                        <div class="alert alert-warning" role="alert">Schedule an inspection</div>

                        {/* Completed */}
                        <div class="alert alert-success" role="alert">Completed</div>

                    </div>
                
                    </div>
                </div>
            
            </div>
        </div>
    );
}

export default MyOrders;