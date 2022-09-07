import './styles/nav.css';
import logo from './imgs/sws.png';
import { useTranslation } from "react-i18next";



var Nav = () => {
    const { t, i18n } = useTranslation();

    var handleLang = (event) => {
        i18n.changeLanguage(event.target.value);
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
        <div className='row nav'>
        <select onChange={handleLang} >
        <option value="en">English</option>
        <option value="ar">Arabic</option>
     </select>

            <div className='container'>
                <div className='row'>
                    <div className='col-lg-2 col-xs-6 col-sm-6 col-md-6 left-s'><img src={logo} /></div>
                    <div className='col-lg-7 middle-s'>
                        <ul>
                            <li><a href='/'>{t('navigation.home')}</a></li>
                            <li><a href='/services'>{t('navigation.services')}</a></li>
                            <li><a href='/about'>{t('navigation.aboutus')}</a></li>
                            <li><a href='contact'>{t('navigation.contact')}</a></li>
                            
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

                    {/* <input type='submit' value='Sign Out' /> */}
                </div>
            </div>
        </div>
    );
}

export default Nav;
 