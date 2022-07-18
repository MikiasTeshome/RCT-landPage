import React from 'react';
import posed from 'react-pose';
import { Link } from '@reach/router';
import Carouselteam from '../components/carouselteam';
import Bannercontact from '../components/bannercontact';
import Pricing from '../components/pricing';
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
      <Item className='jumbotron breadcumb' style={{backgroundImage: `url(${'./img/imghome1.jpg'})`}}>
        <div className='homebread'>
          <div className='container-fluid'>
            <div className='row m-10-hor'>
              <div className='col-md-8 mr-auto '>
                <div className='heading'>
                  Global Business Enterprisess
                </div>
                <div className='subheading'>
                  Located In New York City
                </div>
                <div className='content'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Fusce vitae egestas mi, vel dapibus diam. Mauris malesuada, 
                  nisl non rutrum commodo, sem magna.
                </div>
                <div class="btn" onClick={()=> window.open("//google.com", "_blank")}>
                  <span>Read More</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Item>

      <section className='container-fluid black_more'>
        <div className='row m-10-hor'>

          <div className='col-md-5'>
            <div className='subheading'>
              In New York City
            </div>
            <div className='heading'>
              Global Business <span className='br'></span> Enterprisess
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
    </section>

    <section className='container-fluid pt-0 black_more'>
        <div className='row m-10-hor'>
         <div className='col-md-4'>
          <div className='col-feature'>
            <div className='sub-color text-gradient'>
              01.
            </div>
            <div className='heading'>
              Website Design
            </div>
            <div className='content'>
              Curabitur mollis bibendum luctus. 
              Duis suscipit vitae dui sed suscipit. 
              Vestibulum auctor nunc vitae lectus.
            </div>
          </div>
         </div>

         <div className='col-md-4'>
          <div className='col-feature'>
            <div className='sub-color text-gradient'>
              02.
            </div>
            <div className='heading'>
              Website Development
            </div>
            <div className='content'>
              Curabitur mollis bibendum luctus. 
              Duis suscipit vitae dui sed suscipit. 
              Vestibulum auctor nunc vitae lectus.
            </div>
          </div>
         </div>

         <div className='col-md-4'>
          <div className='col-feature'>
            <div className='sub-color text-gradient'>
              03.
            </div>
            <div className='heading'>
              App Development
            </div>
            <div className='content'>
              Curabitur mollis bibendum luctus. 
              Duis suscipit vitae dui sed suscipit. 
              Vestibulum auctor nunc vitae lectus.
            </div>
          </div>
         </div>

        </div>
    </section>

    <section className='container-fluid p-0 black_more'>
        <div className='row m-10-hor'>

          <div className="col-md-6 pr-md-0">
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

          <div className="col-md-6 pl-md-0">
            <img src="./img/blog1.jpg" className="imgslickz" alt="#"/>
          </div>

        </div>
    </section>

    <section className='container-fluid black_more'>
        <div className='row m-10-hor'>
          <div className='col-12 text-center'>
            <div className='subheading'>Basic info our team</div>
            <div className='heading'>About Our Team</div>
            <div className='row'>
              <div className='col-md-8 mx-auto'>
                <p className='content'>
                  Curabitur mollis bibendum luctus. 
                  Duis suscipit vitae dui sed suscipit. Vestibulum auctor 
                  nunc vitae diam eleifend, in maximus metus sollicitudin. 
                  Quisque vitae sodales lectus. Nam p
                  orttitor justo sed mi finibus, 
                  vel tristique risus faucibus. 
                </p>
              </div>
            </div>
          </div>
          <Carouselteam />
        </div>
    </section>

    <Bannercontact/>
    <Pricing />
    <Testimony />
    <Footer />

  </ListContainer>
);
