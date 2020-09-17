import React from 'react';
import LogoNexpgWhite from '../../../assets/img/logo_nexpg_white.png';
import Mainpage from '../../../assets/img/mainpage.jpeg';

const Main = () => (
  <section className="nexpg-homepage" style={{ background: `linear-gradient(90deg, rgba(67, 255, 255, 0.6)0%, rgba(152,166,235,0.6) 50%, rgba(86,17,98,0.8) 100%),url(${Mainpage})`, backgroundSize: 'cover' }}>
    <div className="layout-flex flex-item-center">
      <div className="m-auto text-center">
        <img src={LogoNexpgWhite} className="nexpg-icon-logo" alt="nex-pg Logo" />
        <h3 className="m-0 mt-4 homepage-font-size">
          <span className="p-2">Convenient</span>
/
<span className="p-2">Economical</span>
/
<span className="p-2">Secure</span>
        </h3>
        <h3 className="font-bold mt-1 m-0">
          <span className="px-2">Payment</span>
          {' '}
          <span>Gateway</span>
        </h3>
      </div>
    </div>
  </section>
);

export default Main;
