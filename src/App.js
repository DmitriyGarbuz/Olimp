import React from 'react';
//import img from './img/photo.jpg'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home/Home';
import About from './about/About';
import Gallery from './gallery/Gallery';
import Price from './price/Price';
import Contact from './contact/Contact';



const App = (props) => {
    return (
     <Router>
         <Route path = '/' component = {Home} />
         <Route path = '/about' component = {About} />
         <Route path = '/gallery' component = {Gallery} />
         <Route path = '/price' component = {Price} />
         <Route path = '/contacts' component = {Contact} />
     </Router>
    )};

export default App;