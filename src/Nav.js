import React, { Component } from 'react';



class Nav extends Component {
  render() {
    return (
      <div>
           
          
 
  <nav id="navigation">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="block">
                        <nav className="navbar navbar-default">
                          <div className="container-fluid">
                            
                            <div className="navbar-header">
                              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                              </button>
                                  <a className="navbar-brand" href="#">
                                    <img src="images/logo.png" alt="Logo" />
                                  </a>

                            </div>

                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                              <ul className="nav navbar-nav navbar-right" id="top-nav">
                                <li><a href="#hero-area">Home</a></li>
                                <li><a href="#about-us">about us</a></li>
                                <li><a href="#blog">Blog</a></li>
                                <li><a href="#price">menu</a></li>
                                <li><a href="#subscribe">news</a></li>
                                <li><a href="#contact-us">contacts</a></li>
                              </ul>
                            </div>
                          </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
  </nav>




      </div>
      );
  }
}
export default Nav;