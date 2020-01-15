import React, {Component} from 'react';
import Gallerys from '../gallery/Gallery.view';
import './style-gallery.css';
import Tabletop from 'tabletop';

 



class Gallery extends Component {
    constructor(props){
        super(props)
        this.state = {
            gallerys: '',
            data: '',
            img: '', 
            id: '', 
            picture: '',
            numb: '' ,
            link: false
      }
      this.getPictures();
    }
    getPictures = () => {
        Tabletop.init({
            key: 'https://docs.google.com/spreadsheets/d/140uIkrEoV9SC-ZSQChr-Xin5E_hLcWUVMv-vVA1TqNw/Persons/edit#gid=929547388',
            callback: googleData => {
              this.setState({gallerys: googleData.Gallery.elements, img: googleData.Gallery.elements.img, id: googleData.Gallery.elements.id});

            },
            simpleSheet: false
          })
        }

   getPicture = (e) => {this.setState({ link: !this.state.link, picture: e.target.src, numb: e.target.alt})
}
prev = () => {parseInt(this.state.numb) === 0 ? this.setState({picture:  this.state.gallerys[15].img , numb: 15}):
this.setState({picture:  this.state.gallerys[(parseInt(this.state.numb)) - 1].img , numb: (parseInt(this.state.numb)) - 1})}

next = () => {parseInt(this.state.numb)=== 15 ? this.setState({picture:  this.state.gallerys[0].img , numb: 0}):
this.setState({picture:  this.state.gallerys[(parseInt(this.state.numb)) + 1].img , numb: (parseInt(this.state.numb)) + 1})}
    render () {
        return (<Gallerys.Back id="gallery">
            <Gallerys.Headline>Галерея</Gallerys.Headline>
<Gallerys.Conteiner><div className="gallery-mob">
{this.state.gallerys ?
    <Gallerys.ConteinerIn>
   <img className="pictures" src={this.state.gallerys[0].img} alt={this.state.gallerys[0].id} onClick={this.getPicture}></img>
  <img className="pictures" src={this.state.gallerys[1].img} alt={this.state.gallerys[1].id} onClick={this.getPicture}></img>
  <img className="pictures" src={this.state.gallerys[2].img} alt={this.state.gallerys[2].id} onClick={this.getPicture}></img>
  <img className="pictures" src={this.state.gallerys[3].img} alt={this.state.gallerys[3].id} onClick={this.getPicture}></img>
    </Gallerys.ConteinerIn>
      : <div className="loader">
      <div className="loader_inner"></div>
    </div>
 }
{this.state.gallerys ?
    <Gallerys.ConteinerIn>
  <img className="pictures" src={this.state.gallerys[4].img} alt={this.state.gallerys[4].id} onClick={this.getPicture}></img>
  <img className="pictures" src={this.state.gallerys[5].img} alt={this.state.gallerys[5].id} onClick={this.getPicture}></img>
  <img className="pictures" src={this.state.gallerys[6].img} alt={this.state.gallerys[6].id} onClick={this.getPicture}></img>
  <img className="pictures" src={this.state.gallerys[7].img} alt={this.state.gallerys[7].id} onClick={this.getPicture}></img>
    </Gallerys.ConteinerIn>
      : <div className="loader">
      <div className="loader_inner"></div>
    </div>
 }
 </div>
 <div className="gallery-mob">
 {this.state.gallerys ?
    <Gallerys.ConteinerIn>
  <img className="pictures" src={this.state.gallerys[8].img} alt={this.state.gallerys[8].id} onClick={this.getPicture}></img>
  <img className="pictures" src={this.state.gallerys[9].img} alt={this.state.gallerys[9].id} onClick={this.getPicture}></img>
  <img className="pictures" src={this.state.gallerys[10].img} alt={this.state.gallerys[10].id} onClick={this.getPicture}></img>
  <img className="pictures" src={this.state.gallerys[11].img} alt={this.state.gallerys[11].id} onClick={this.getPicture}></img>
    </Gallerys.ConteinerIn>
      : <div className="loader">
      <div className="loader_inner"></div>
    </div>
 }
 {this.state.gallerys ?
    <Gallerys.ConteinerIn>
  <img className="pictures" src={this.state.gallerys[12].img} alt={this.state.gallerys[12].id} onClick={this.getPicture}></img>
  <img className="pictures" src={this.state.gallerys[13].img} alt={this.state.gallerys[13].id} onClick={this.getPicture}></img>
  <img className="pictures" src={this.state.gallerys[14].img} alt={this.state.gallerys[14].id} onClick={this.getPicture}></img>
  <img className="pictures" src={this.state.gallerys[15].img} alt={this.state.gallerys[15].id} onClick={this.getPicture}></img>
    </Gallerys.ConteinerIn>
      : <div className="loader">
      <div className="loader_inner"></div>
    </div>
 }
</div>
</Gallerys.Conteiner>
{this.state.link !== false ? <div className="globalPicture">
    <div className="container"></div>
    <div className="row justify-content-end">
        <div className="col-2 align-self-end"><div  className="close" onClick={this.getPicture}></div></div>
    </div>
    <div className="row align-items-center justify-content-center" id="row-allhaight">
        <div className="col-1"><p> <i className="arrow left" onClick={this.prev}></i></p></div>
        <div className="col-10"><p> <i className="arrow left" onClick={this.prev}></i></p><img src={this.state.picture} alt='galleryglobal'></img><p> <i className="arrow right" onClick={this.next}></i></p>
        <Gallerys.Futer></Gallerys.Futer>
        </div>
        <div className="col-1"><p> <i className="arrow right" onClick={this.next}></i></p>
</div>
    </div>
    
    </div> : ''}
<Gallerys.Futer></Gallerys.Futer>
        </Gallerys.Back>
        )
    }
}
export default Gallery;