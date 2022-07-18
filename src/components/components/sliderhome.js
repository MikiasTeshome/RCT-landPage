import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const content = [
  {
    title: "LEADER OF GLOBAL BUSSINESS ENTEPRISES",
    description:
      "Manage your Business",
    button: "Read More",
    link: "//google.com",
    image: "./img/bg-1.jpg"
  },
  {
    title: "LEADER OF GLOBAL BUSSINESS ENTEPRISES",
    description:
      "Start your Goal!",
    button: "Read More",
    link: "//google.com",
    image: "./img/bg-2.jpg"
  },
  {
    title: "LEADER OF GLOBAL BUSSINESS ENTEPRISES",
    description:
      "Expand your Business",
    button: "Read More",
    link: "//google.com",
    image: "./img/bg-3.jpg"
  }
];

export default () => (
  <Slider className="slider-wrapper" autoplay={6000}>
            {content.map((item, index) => (
              <div
                key={index}
                className="slider-content"
                style={{ background: `url('${item.image}') no-repeat center center` }}
              >
                <div className="inner">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <button onClick={()=> window.open(item.link, "_blank")}>
                    <span>
                      {item.button}
                    </span>
                  </button>
                </div>
              </div>
            ))}
        </Slider>
);
