import React from 'react';
import AYATRA from '../../../assets/img/ayatra.png';
import Master from '../../../assets/img/master.png';
import Mpu from '../../../assets/img/mpu.png';
import UnionPayLogo from '../../../assets/img/UnionPay_logo.png';
import Visa from '../../../assets/img/visa.png';
import Jcb from '../../../assets/img/jcb.png';

const OurNetwork = () => (
  <section className="Our_network py-6 " id="Our_network">
    <div className="m-auto text-center">
      <h1 className="my-3 font-bold">Our Network</h1>
      <h4 className="font-color-black">
        NEXPG supports all payment methods such as credit cards and debit cards, electronic money,
        bank payments, contact/contactless ICs, QR codes, and mobile terminals.
      </h4>
    </div>
    <div className="link-icon-width layout-grid m-auto g-4 grid-gap-70 my-4 text-center ie-flex">
      <img src={Mpu} alt="MPU Myanmar" className="link-icon-medium" />
      <img src={AYATRA} className="link-icon-medium" alt="AYA Myanmar Payment" />
      <img src={UnionPayLogo} alt="UnionPay Myanmar" className="link-icon-medium" />
      <img src={Visa} alt="visa Myanmar" className="link-icon-medium" />
      <img src={Master} alt="master Myanmar" className="link-icon-medium" />
      <img src={Jcb} alt="Jcb Myanmar" className="link-icon-medium" />
    </div>
  </section>
);

export default OurNetwork;
