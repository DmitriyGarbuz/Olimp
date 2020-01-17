import React, {Component} from 'react';
import '../helpers/loader.css';
import '../about/about.scss';
import Tabletop from 'tabletop';
import Gym from '../img/gym.jpg';

// class Person extends Component {
//     state = {
//         data: this.props.data|| '',
//         name: this.props.name|| '',
//         img: this.props.img|| '', 
//         id: this.props.id|| '',
//         text: this.props.text|| '',
//     }
    
//     render () {

//         return (

         
// <div className="col-3">
//    <img src={this.state.img} className="rounded mx-auto d-block" alt="PersonPhoto"/>
//    <div className="col align-self-center text-center">
//    <h4>{this.state.name}</h4>
//    <p>{this.state.text}</p>
//    </div>
//  </div>



//         )
//     }
  
// }

class About extends Component {
    constructor(props){
        super(props)
        this.state = {
            persons:'',
            name:'',
            img:'',
            id:'',
            type: '',
            
        }
       this.getPerson() ;
    }
    getPerson = () => {
        Tabletop.init({
            key: 'https://docs.google.com/spreadsheets/d/140uIkrEoV9SC-ZSQChr-Xin5E_hLcWUVMv-vVA1TqNw/Persons/edit#gid=929547388',
            callback: googleData => {
              this.setState({persons: googleData.Persons.elements});
            },
            simpleSheet: false
          })
        }
    render () {
        return (
            <div className="about" id="about">
            <div className="row justify-content-center">
                <div className="h2-center">
                <h2>В 1942 году мы создали <b>современный</b> тренажерный зал, в котором есть все необходимое для <b>эффектных</b> и <b>комфортных</b> тренировок.</h2>
                </div>
             </div>
             <div className="row justify-content-center">
                <div className="after-h2-center">
                <p className="after-h2">Наша команда знает как подобрать индивидуальную програму именно для вас. Мы уважаем личное пространство каждого атлета и вокруг каждого тренажёра предусмотрено свободное место.</p>
                </div>
             </div>
             <div className="row justify-content-center" id="row-column-blok-2" >
             {/* {this.state.persons ?
         this.state.persons.map(person => 
          <Person {...person} key={person.id}/>
         ) : <div className="loader">
         <div className="loader_inner"></div>
       </div>
      } */}
      <div className="container">
    <img src={Gym} className="rounded mx-auto d-block" alt="PersonPhoto"/>
   <div className="col align-self-center text-center">
   <h4>тут соответственно фото входа с улицы</h4>
   <p> Ну и написать типо: мы вмегда рады вас видеть что то такое..</p>
   </div>
      </div>
             </div>       
         </div>
        
 
        )
    }
}
export default About;