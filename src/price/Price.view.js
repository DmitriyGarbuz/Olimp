import styled from "styled-components";
import Background from "../img/homebackground.jpg";
import Backmob from '../img/BackMob.png';

export default {
    Back: styled.div`
    width: 100%;
    height: 100%;
    background-image: URL(${Backmob});
    background-size: cover;
    background-repeat: no-repeat;
background-position: bottom right, center center, top left;
    @media screen and (min-width: 600px) {
      width: 100%;
      height: 90vh;
      display: flex;
      background-size: cover;
      flex-direction: column;
      background-image: URL(${Background});
      background-size: cover;
      ​​​​​​​background-repeat: no-repeat;
      background-position: left;
      display: flex;
      Justify-content: flex-start;
      align-items: center;
    }
    `,
    Text: styled.p`
font-family: 'Orienta', sans-serif;
font-size: 14px;
font-weight: 500;  
letter-spacing: -1px; 
color: #23344A;
text-shadow: 1px 1px 0 #000, margin: 2px 0 4px; 
text-align: center; 
@media screen and (min-width: 600px) {
  font-size: 30px; 
  }
`,
Headline: styled.p`
color: white; 
font-family: 'Raleway',sans-serif; 
font-size: 26px; 
font-weight: 800; 
line-height: 72px; 
margin: 0 0 4px; 
text-align: center; 
text-transform: uppercase;
@media screen and (min-width: 600px) {
  font-size: 46px; 
  }`,
  Futer: styled.div`
height: 2vh;
    @media screen and (min-width: 600px) {
      height: 5vh;
}`,
Conteiner: styled.div`
    background-position:  center center;
    margin-left: 5%;
    width: 90%;
    height: 97%;
    background-color: rgba(247,245,245,0.8);
    border-radius: 5px;
    @media screen and (min-width: 600px) {
      display: flex;
      flex-direction: column;
      margin-left: 0%;
      width: 65%;
      height: 90vh;
      background-color: rgba(247,245,245,0.8);
      background-position: center center;
      filter: alpha(opacity=60);
      border-radius: 5px;
    }`,
}