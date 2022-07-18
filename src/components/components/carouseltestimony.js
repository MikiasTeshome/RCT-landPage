import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return (
      <div {...props}></div>
    );
  }
}

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
    };
    return (
    <section className='container-fluid  wraper-testimony' 
    style={{backgroundImage: `url(${'./img/testimony.jpg'})`}}>
      <div className='row m-10-hor'>
        <div className='testimony'>
          <Slider {...settings}>

            <CustomSlide className='itm' index={1}>
              <div className='blockquote'>
                <div className="fa"></div>
                <div className="conesti">
                  <p>
                  Curabitur mollis bibendum luctus. 
                  Duis suscipit vitae dui sed suscipit. 
                  Vestibulum vitae metus sollicitudin. 
                  </p>
                  <div className="bytesti">
                    Lauria, Guest
                  </div>
                </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={2}>
              <div className='blockquote'>
                <div className="fa"></div>
                <div className="conesti">
                  <p>
                  Curabitur mollis bibendum luctus. 
                  Duis suscipit vitae dui sed suscipit. 
                  Vestibulum vitae metus sollicitudin. 
                  </p>
                  <div className="bytesti">
                    Lauria, Guest
                  </div>
                </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={3}>
              <div className='blockquote'>
                <div className="fa"></div>
                <div className="conesti">
                  <p>
                  Curabitur mollis bibendum luctus. 
                  Duis suscipit vitae dui sed suscipit. 
                  Vestibulum vitae metus sollicitudin. 
                  </p>
                  <div className="bytesti">
                    Lauria, Guest
                  </div>
                </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={4}>
              <div className='blockquote'>
                <div className="fa"></div>
                <div className="conesti">
                  <p>
                  Curabitur mollis bibendum luctus. 
                  Duis suscipit vitae dui sed suscipit. 
                  Vestibulum vitae metus sollicitudin. 
                  </p>
                  <div className="bytesti">
                    Lauria, Guest
                  </div>
                </div>
              </div>
            </CustomSlide>

          </Slider>
        </div>
      </div>
    </section>
    );
  }
}
