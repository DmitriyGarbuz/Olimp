import React, {Component} from 'react';
import "../home/home.scss";
import Phone from '../img/logo2.png';
import Up from '../img/icon_top.png';
import About from '../about/About';
import Gallery from '../gallery/Gallery';
import Price from '../price/Price';
import Contact from '../contact/Contact';

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
          display: ''
    }
    
    }
stylechange = () => {
    if (window.scrollTop() === 0) {
      this.setState({display: 'none'});
    } else {
      this.setState({display: 'block'});   
  }


}
changeUp = () => {
  this.setState({up: true});
}

    render () {
      
        return (<div>         
<div className="heder">
<div className="row justify-content-center"><ul className="nav" id="up" display={this.state.display}>
  <li className="nav-item">
    <a className="nav-link" href="#about">Наша Команда</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#gallery">Галерея</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#price">Цены</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#contacts">Контакты</a>
  </li>
  </ul>
  <ul className="nav" id="second-nav">
  <li className="nav-item"><a className="nav-link" href="Tel: +380503100458">Тел. +38 (050) 310-04-58</a> </li>
  <li className="nav-item">
    <a className="nav-link disabled" href="/" >Киев, Борщаговка<br/>бул. Ромена Ролана 7</a>
  </li>
  </ul>
   </div>
   <div className="row justify-content-between">
     <div className="col-1"></div>
     <div className="col-4">

        <h1>Спортивный клуб <b>OLIMP</b></h1>
        <p className="after-h1"><b>Лучшее место для работы над своим телом!</b></p>
        <p className="after-h1">Мы создали <b>современный</b> тренажерный зал, в котором есть все необходимое для <b>эффектных</b> и <b>комфортных</b> тренировок.</p>
     </div>
     <div className="col-4 ">
       <div className="col align-self-center" id="mobile">
         <img src={Phone} className="rounded float-right" alt="phone"></img>
       </div>
     </div>
     <div className="col-1"></div>
   </div>
</div>
<About/>
<Gallery/>
<Price/>
<Contact/>
<a href="#up" id="btn-up" up={this.state.up}><img src={Up} alt="up"></img></a>
        </div>)
    }
}
export default Home;