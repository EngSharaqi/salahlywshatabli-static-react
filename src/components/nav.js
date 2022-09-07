import './styles/nav.css';
import logo from './imgs/sws.png';
import { useTranslation } from "react-i18next";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Services from './services/services'
import Main from './main'
import Privacy from './privacy'
import Terms from './terms'
import About from './about'
import Contact from './contact'
var Nav = () => {
    const { t, i18n } = useTranslation();
    var handleLang = (event) => {
        i18n.changeLanguage(event.target.value);
        var langVal = document.getElementById('lang').value //en || ar
        document.getElementsByTagName('body')[0].setAttribute('lang', langVal)
      }

    let height = {
        "min-height": window.innerHeight + 100 + 'px',
        "height": "100%",
        "overflow": "hidden"
    }
    var test = {
        "min-height": "60%",
        "height": "auto",
        "max-height": "75%",
        "overflow": "auto"
    }

    var handleSideBar = () => {
        var c = document.getElementById('close');
        var s = document.getElementById('sideBar');

        s.classList.add('show-s');
        s.classList.remove('hide');
        document.getElementsByTagName('body')[0].classList.add('unOver');
    }

    var handleCloseSideBar = () => {
        var s = document.getElementById('sideBar');
        s.classList.add('hide');
        s.classList.remove('show-s');

        document.getElementsByTagName('body')[0].classList.remove('unOver');

    }
    return (
    <BrowserRouter>
        <div className='row nav'>
        

            <div className='container'>
                <div className='row'>
                    <div className='col-lg-2 col-xs-6 col-sm-6 col-md-6 left-s'><img src={logo} /></div>
                    <div className='col-lg-7 middle-s'>
                    
                        <ul>
                            <li><NavLink to='/'><a>{t('navigation.home')}</a></NavLink></li>
                            <li><NavLink to='/services'><a>{t('navigation.services')}</a></NavLink></li>
                            <li><NavLink to='/about'><a>{t('navigation.aboutus')}</a></NavLink></li>
                            <li><NavLink to='contact'><a>{t('navigation.contact')}</a></NavLink></li>
                            
                        </ul>
                        
                    </div>
                    <div className='col-lg-3 col-xs-6 col-sm-6 col-md-6 right-s'>
                        {/* if log out or not logged in */}
                        

                        {/* if logged in */}
                        <ul className='nav-profile-f'>
                            <li><span>{t('navigation.more')}</span> <i class="fas fa-sort-down"></i></li>
                            <ul className='hover'>
                               
                                <li><i class="fas fa-file-alt"></i> <a href='/terms'>{t('navigation.termsAndConditions')}</a></li>
                                <li><i class="fas fa-university"></i> <a href='/privacy'>{t('navigation.privcayPolicy')}</a></li>
                               <li>
                                <i class="fas fa-language"></i>
                                    <select id="lang" onChange={handleLang} >
                                        <option value="en">English</option>
                                        <option value="ar">العربية</option>
                                    </select>
                               </li>
                            </ul>
                        </ul>

                        <div className='f-bar'>
                            <i onClick={handleSideBar} id='bar' className="fas fa-bars"></i>
                        </div>
                    </div>
                </div>
            </div>

            <div onClick={handleCloseSideBar} id='sideBar' className='row side hide' style={height}>
                <h5><i id='close' class="fas fa-times"></i></h5>
                <div style={test} >
                    <h4><a href='/'>{t('navigation.home')}</a></h4>
                    <h4><a href='/services'>{t('navigation.services')}</a></h4>
                    <h4><a href='/about'>{t('navigation.aboutus')}</a></h4>
                    <h4><a href='/contact'>{t('navigation.contact')}</a></h4>
                    <h4> <a href='/terms'>{t('navigation.termsAndConditions')}</a></h4>
                    <h4> <a href='/privacy'>{t('navigation.privcayPolicy')}</a></h4>
                    <h4>
                        <i class="fas fa-language"></i>
                        <select id="lang" onChange={handleLang} >
                            <option value="en">English</option>
                            <option value="ar">العربية</option>
                        </select>
                    </h4>

                    {/* <input type='submit' value='Sign Out' /> */}
                </div>
            </div>
        </div>
        <Routes>
          <Route exact path="/" element={<Main />}/>
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/privacy" element={<Privacy />} />
          <Route exact path="/terms" element={<Terms />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        </BrowserRouter>
    );
}

export default Nav;
 