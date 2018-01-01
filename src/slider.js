import React, { Component } from 'react';



class Slider extends Component {
  render() {
    return (
      <div>
         <section id="slider">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="block wow fadeInUp" data-wow-duration="500ms" data-wow-delay="300ms">
                        <div className="title">
                            <h3>Featured <span>Works</span></h3>
                        </div>
                        <div id="owl-example" className="owl-carousel">
                            <div>
                                <img className="img-responsive" src="images/slider/slider-img-1.jpg" alt="" />
                            </div>
                            <div>
                                <img className="img-responsive" src="images/slider/slider-img-2.jpg" alt="" />
                            </div>
                            <div>
                                <img className="img-responsive" src="images/slider/slider-img-3.jpg" alt="" />
                            </div>
                            <div>
                                <img className="img-responsive" src="images/slider/slider-img-4.jpg" alt="" />
                            </div>
                            <div>
                                <img className="img-responsive" src="images/slider/slider-img-1.jpg" alt="" />
                            </div>
                            <div>
                                <img className="img-responsive" src="images/slider/slider-img-2.jpg" alt="" />
                            </div>
                            <div>
                                <img className="img-responsive" src="images/slider/slider-img-3.jpg" alt="" />
                            </div>
                            <div>
                                <img className="img-responsive" src="images/slider/slider-img-4.jpg" alt="" />
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
      </div>
      );
  }
}
export default Slider;