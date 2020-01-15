import styled from "styled-components";


export default {
    Back: styled.div`
    margin-top: 5%;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background: linear-gradient(to top, #2877CC, #000082);
    box-shadow: 0rem 0.27rem 1.1rem rgba(0, 0, 0, 0.16);
background-position: bottom right, center center, top left;
    @media screen and (min-width: 600px) { 
      display: flex;
      background-size: cover;
      flex-direction: column;
      ​​​​​​​background-repeat: no-repeat;
      background-position: left;
      display: flex;
      Justify-content: flex-start;
      align-items: center;
    }
    `,
    Conteiner: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 3%;
    margin-right:3%
    width: auto;
    height: 40%;
    background-color: #DBDFF0;
    box-shadow: 0rem 0rem 5.1rem rgba(116, 119, 247, 0.705);
    background-position: center center;
    filter: alpha(opacity=60);
    border-radius: 5px;
    border: 7px solid #2F5B81;
    background-color: #DBDFF0;
    background-position:  center center;
    @media screen and (min-width: 600px) {
      display: flex;
      flex-direction: column;
    }
      @media screen and (min-width: 1035px) {
      display: flex;
      flex-direction: row;
      margin-left: 0%;
      width: 90%;
      height: 60rem;
      background-color: #DBDFF0;
      background-position: center center;
      filter: alpha(opacity=60);
      border-radius: 5px;
      border: 2px solid #2F5B81;
    }
    @media screen and (min-width: 1435px) {
      width: 80%;
    }
    `,
    ConteinerIn: styled.div`
    @media screen and (min-width: 600px) {
      width: 50%;
    }
    @media screen and (min-width: 1035px) {
      
      box-sizing: border-box;
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      Justify-content: center;
    }`,
    Headline: styled.p`
    margin-top: 5%;
    color: white; 
    font-family: 'Montserrat', sans-serif; 
    font-size: 26px; 
    font-weight: 600; 
    line-height: 72px; 
    margin: 0 0 24px; 
    text-align: center; 
    text-transform: uppercase;
    @media screen and (min-width: 600px) {
      font-size: 46px; 
      }`,
  Futer: styled.div`
height: 10vh;
    @media screen and (min-width: 600px) {
}`,
}