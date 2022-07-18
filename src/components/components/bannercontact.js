import React from 'react';
import { Link } from '@reach/router';

export default () => (
  <section className='container-fluid'>
        <div className='row m-10-hor'>

          <div className='col-md-6'>
            <img src='./img/mocks.png' alt='imgbanner' className='w-100 border-radius'/>
          </div>
          <div className='col-md-6 centered'>
            <div>
              <div className="subheading">
                You can trust us
              </div>
              <div className="heading">
                We Made Your Design
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                <span className='br'></span>Fusce vitae egestas mi, vel dapibus diam. Mauris malesuada, 
                <span className='br'></span>nisl non rutrum commodo, sem magna.
              </p>
              <Link className='btn' to="/contact">
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
          
        </div>
    </section>
);
