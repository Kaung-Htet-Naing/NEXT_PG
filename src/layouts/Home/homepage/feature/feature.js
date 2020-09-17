import React from 'react';
import AyatraSm from '../../../assets/img/ayatra_sm.png';
import curveinverse from '../../../assets/img/curve-inverse.png';
import JcbSm from '../../../assets/img/jcb_sm.png';
import MastercardSm from '../../../assets/img/mastercard_sm.png';
import MpuSm from '../../../assets/img/mpu_sm.png';
import UnionPaySm from '../../../assets/img/UnionPay_sm.png';
import VisaSm from '../../../assets/img/visa_sm.png';

const Feature = () => (

  <div>
    <section className="Feature py-6 bg-white" id="Feature">
      <div className="m-auto text-center">
        <h2 className="font-bold">Feature</h2>
        <h4 className="font-color-black">
          NEXPG improves the convenience of payment systems
          at business operators&apos EC sites and real stores.
{' '}
          <br />
Enrich the end-user
        shopping experience and increase customer loyalty.
      </h4>
      </div>
      <div className="feature-card layout-grid g-5 grid-gap-30 mt-4 ie-flex">
        <div className="feature-card-thumb">
          <i className="fas fa-chalkboard-teacher npg-icon-xlarge fa" />
          <h5 className="font-bold">EC</h5>
          <p>
            NEXPG is compatible with EC sites and contributes to
            conversion improvement.
        </p>
        </div>
        <div className="feature-card-thumb">
          <i className="fas fa-store npg-icon-xlarge" />
          <h5 className="font-bold">Real Shop</h5>
          <p>
            Corresponds to small amount settlements to prevent sales opportunity lost.
        </p>
        </div>
        <div className="feature-card-thumb">
          <i className="fas fa-bus npg-icon-xlarge" />
          <h5 className="font-bold">Transportation</h5>
          <p>
            Corresponds to IC transportation cards and mobile application.
        </p>
        </div>
        <div className="feature-card-thumb">
          <i className="fas fa-user-graduate npg-icon-xlarge" />
          <h5 className="font-bold">Education</h5>
          <p className="balance-text">
            Enable the payment of online learning or students tuitions.
        </p>
        </div>
        <div className="feature-card-thumb">
          <i className="fas fa-gamepad npg-icon-xlarge" />
          <h5 className="font-bold">E-Sport</h5>
          <p>
            Compatible with online games allowing in-app purchases.
        </p>
        </div>
      </div>
      <div className=" feature-credit_card--container px-0 py-0 layout-grid grid-gap-30 g-3 mt-4 ie-flex">
        <div className="feature-card-thumb py-0 px-0 layout-grid g-1">
          <div className="py-5">
            <img src={AyatraSm} className="npg-icon-medium mr-3" alt="AYA Myanmar" />
            <img src={UnionPaySm} className="npg-icon-medium ml-3" alt="UnionPay Myanmar" />
          </div>
          <div className="oval-inverse" style={{ background: `url(${curveinverse})`, backgroundSize: '100% 100%', backgroundPosition: 'center' }}>
            <h5 className="font-bold">Debit</h5>
            <p className="px-4">
              Compatible with widely used debits cards. Improve user experience.
          </p>
          </div>
        </div>
        <div className="feature-card-thumb py-0 px-0 layout-grid g-1">
          <div className="layout-flex flex-space-around py-5 ">
            <img src={VisaSm} className="npg-icon-medium" alt="visa Myanmar" />
            <img src={MastercardSm} className="npg-icon-medium" alt="master Myanmar" />
            <img src={JcbSm} className="npg-icon-medium" alt="Jcb Myanmar" />
          </div>
          <div className="oval-inverse" style={{ background: `url(${curveinverse})`, backgroundSize: '100% 100%', backgroundPosition: 'center' }}>
            <h5 className="font-bold">Credit</h5>
            <p className="px-4 font-color-black mb-0">
              Compatible with international brand companies. Contributes to the enhancement of your brand power.
          </p>
          </div>
        </div>
        <div className="feature-card-thumb px-0 py-0 layout-grid g-1">
          <div className="py-5">
            <img src={MpuSm} className="npg-icon-medium" alt="mpu" />
          </div>
          <div className="oval-inverse" style={{ background: `url(${curveinverse})`, backgroundSize: '100% 100%', backgroundPosition: 'center' }}>
            <h5 className="font-bold">MPU</h5>
            <p className="px-4">
              We are under the umbrella of MPU. We can offer flexible transaction through various banks.
          </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Feature;
