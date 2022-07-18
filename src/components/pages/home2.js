import React from 'react';
import posed from 'react-pose';
import ImageGallery from "../components/ImageGallery";
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
      <Item className='jumbotron breadcumb' style={{backgroundImage: `url(${'./img/imghome2.jpg'})`}}>
        <div className='homebread'>
          <div className='container-fluid'>
            <div className='row m-10-hor'>
              <div className='col-md-8 mx-auto text-center '>
                <div className='heading'>
                  Global Business Enterprisess
                </div>
                <div className='subheading'>
                  Located In New York City
                </div>
                <div className='content mx-auto'>
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

    <section className='container-fluid black'>
      <div className='row m-10-hor'>
        <div className='col-12'>
          <div className='AppContainer'>
            <ImageGallery />
          </div>
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
