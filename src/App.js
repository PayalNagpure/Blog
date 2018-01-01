import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Slider from './slider';
import About from './about';
import Blog from './blog';
import Price from './price';
import Subscribe from './subscribe';
import Contact from './contact';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <div>
        <section id="hero-area">
      <img className="img-responsive" src="images/header.jpg" alt="" />
    </section>
           
      <Nav />

        <Slider />

    
        <About />
         

         <Blog />
    
         <Price />
         
         <Subscribe />
          
        <Contact />
       
         <Footer />
   
    
   
    <footer id="footer-bottom">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-sm-12">
                    <div className="block">
                        <p>Copyright &copy; 2014 - All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>

       
      </div>
    );
  }
}

export default App;
