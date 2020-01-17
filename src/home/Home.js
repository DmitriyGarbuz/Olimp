import React, {Component} from 'react';
import "../home/home.scss";
import Phone from '../img/logo2.png';
import Up from '../img/icon_top.png';
import About from '../about/About';
import Gallery from '../gallery/Gallery';
import Price from '../price/Price';
import Contact from '../contact/Contact';

class Home extends Component {
  _isMounted = false;
    constructor(props){
        super(props)      
        this.state = {
          scrollTop: 0,          
          display: 'none'
    }
    
    }
    componentDidMount() {
    
this.onScroll = () => {
  window.addEventListener('scroll', () => {
    if (this.state.scrollTop > 35) {
      this.setState({display: 'block'});
      return 
    }else{
    let a = this.state.scrollTop + 1;
     this.setState({scrollTop: a , display: 'none'});
   }});
  }

this.onScroll();

  this.clickUp = () => {
  this.setState({display: 'none', scrollTop: 0});
}
    }


    componentWillUnmount() {
      this._isMounted = false; 
    }
    render () {
      
        return (<div >         
<div className="heder" >
<div className="row justify-content-center"><ul className="nav" id="up" >
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
        <p className="after-h1">Наш <b>опытный</b> тренерский состав поможет Вам добиться <b>максимальных</b> результатов!</p>
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
<a href="#up" id="btn-up" onClick={this.clickUp} style={{display: this.state.display}}><img src={Up} alt="up"></img></a>
        </div>)
    }
}
export default Home;