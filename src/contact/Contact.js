import React, {Component} from 'react';
import  '../contact/contact.scss';
import MapConteiner from './GoogleMap';
import Facebook from '../img/fb.png';
import Insta from '../img/insta.png';

class Contact extends Component {
    render () {
        return (
        <div className="contacts" id="contacts">
            <div className="row justify-content-center">
            <h6>Ты уже хочешь узнать как нас найти? <b>Вот Наши Контакты:</b></h6>
            </div>
            <div className="text-center">
            <p className="after-h2">Город Киев, Святошинский район, бул. Ромена Ролана 7</p>
            <p className="after-h2">Вход с левой стороны (2 этаж)</p>
            <p className="after-h2">Телефон:  <a href="Tel: +380503100458">+38 (050) 310-04-58</a></p>
            </div>
            
        <div className="row justify-content-center">
          <div className="container">
          <MapConteiner/>
        </div>
        </div>
        <div className="row justify-content-between" id="mob-column">
          <div className="col-3">
            <div className="text-center">
              <p className="bottom-text-2">Наш Адрес:</p>
              <p className="bottom-text-2">Город Киев<br/>бул. Ромена Ролана 7</p>
    
            </div>
          </div>
          <div className="col-3">
            <div className="text-center">
           <a href="Tel: +380503100458">Тел. +38 (050) 310-04-58</a>
           <div className="row justify-content-center">
           <a href="https://www.facebook.com/PowerGymOLIMP/"><img className="logo" src={Facebook} alt="Facebook"></img></a>
         <a href="https://www.instagram.com/power_gym_olimp/"><img className="logo" src={Insta} alt="Instagram"></img></a>
           </div>
            </div>
          </div>
          <div className="col-3">
            <div className="text-center">
              <p className="bottom-text-2">Время работы: </p>
              <p className="bottom-text-2">Пн-Пт: 7.00-22.00<br/>Сб-Вс: 10.00-18.00</p>
            </div>
          </div>
        </div>
       </div>
        )
    }
}
export default Contact;