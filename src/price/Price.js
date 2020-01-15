import React, {Component} from 'react';
import './price.scss';
import Tabletop from 'tabletop';
import '../helpers/loader.css';

class Abon extends Component {
        state = {
            data: this.props.data|| '',
            abonement: this.props.abonement|| '',
            cost: this.props.cost|| '', 
            id: this.props.id|| '',       
        }
        
        render () {
            return (<div className="row justify-content-between">
                     <p className="abon align-self-center">{this.state.abonement}</p>
                     <p className="cost align-self-center">{this.state.cost}</p>

            </div>
            )
        }
    
}

class Price extends Component {
    constructor(props){
        super(props)
        this.state = {
            infos:'',
            abonement:'',
            cost:'',
            id:'',
            error:null,
            
        }
       this.getPrice() ;
    }


  
    getPrice = () => {
        Tabletop.init({
            key: 'https://docs.google.com/spreadsheets/d/140uIkrEoV9SC-ZSQChr-Xin5E_hLcWUVMv-vVA1TqNw/Sheet1/edit#gid=0',
            callback: googleData => {
              this.setState({infos: googleData.Abons.elements});
            },
            simpleSheet: false
          })
    }
    
    render () {
        return (
            <div className="price" id="price">
            <div className="row justify-content-center">
                   <div className="h2-center">
                      <h2><b>Наш Список Цен на Абонементы</b></h2>
                   </div>
                </div>
                <div className="row justify-content-center">
                   <div className="after-h2-center">
                      <p className="after-h2">Выбирай самые удобные для себя условия!</p>
                   </div>
                </div>
               <div className="container justify-content-center" id="row-column-blok-2">
              
               {this.state.infos ?
         this.state.infos.map(info =>
          <Abon {...info} key={info.id}/>
        ) : <div className="loader">
        <div className="loader_inner"></div>
      </div>
      }
               </div>
            </div>   
        )
    }
}
export default Price;