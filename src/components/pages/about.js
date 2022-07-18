import React from 'react';
import { Link } from '@reach/router';
import posed from 'react-pose';
import Testimony from '../components/carouseltestimony';
import Footer from '../components/footer';

const ListContainer = posed.div({
  enter: { staggerChildren: 20 },
  exit: { staggerChildren: 20, staggerDirection: 0 }
});

const Item = posed.section({
  enter: { y: 0, opacity: 1 },
  exit: { y: 5, opacity: 0 }
});


export default () => (
<ListContainer>
  <Item className='jumbotron breadcumb' style={{backgroundImage: `url(${'./img/testimony.jpg'})`}}>
    <div className='mainbreadcumb'>
      <div className='container-fluid'>
        <div className='row m-10-hor'>
          <div className='col-md-6'>
            <h1>About us</h1>
          </div>
          <div className='col-md-6'>
            <div className='list'>
              <Link className='link' to="/home">Home</Link>
              <span className='dash'>/</span>
              <span>About</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Item>

  <Item className='container-fluid black'>
        <div className='row m-10-hor'>

        <div className='col-md-5'>
            <div className='subheading'>
              We are the first 
            </div>
            <div className='heading'>
              Start Business <span className='br'></span> Enterprisess
            </div>
          </div>

          <div className='col-md-7'>
            <div className='content'>
              Curabitur mollis bibendum luctus. 
              Duis suscipit vitae dui sed suscipit. 
              Vestibulum auctor nunc vitae diam eleifend, 
              in maximus metus sollicitudin. Quisque vitae sodales lectus. 
              Nam porttitor justo sed mi finibus, vel tristique risus faucibus.
            </div>
            <div className='content'>
              Curabitur mollis bibendum luctus. 
              Duis suscipit vitae dui sed suscipit. 
              Quisque vitae sodales lectus, 
              vel tristique risus faucibus.
            </div>
          </div>

        </div>
  </Item>

  <section className='container-fluid pt-0'>
        <div className='row m-10-hor'>

          <div className="col-md-6 px-0">
            <img src="./img/blog.jpg" className="imgslickz" alt="#"/>
          </div>

          <div className="col-md-6 centered p-md-5 pt-5">
            <div>
              <div className="subheading">January 14, 2019</div>
              <div className="heading">
                Living Your Dreams
              </div>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                sed do eiusmodt temp to the incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis a 
                nostr a exercitation ullamco laboris nisi ut aliquip.
              </p>
              <Link className='btn' to="">
                <span>More Detail</span>
              </Link>
            </div>
          </div>

          <div className="col-md-6 centered p-md-5 pt-5 pb-5">
            <div>
              <div className="subheading">January 22, 2019</div>
              <div className="heading">
                Start Projects Saas
              </div>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                sed do eiusmodt temp to the incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis a 
                nostr a exercitation ullamco laboris nisi ut aliquip.
              </p>
              <Link className='btn' to="">
                <span>More Detail</span>
              </Link>
            </div>
          </div>

          <div className="col-md-6 px-0">
            <img src="./img/blog1.jpg" className="imgslickz" alt="#"/>
          </div>

        </div>
  </section>

  <Testimony />
  <Footer />
</ListContainer>

);
