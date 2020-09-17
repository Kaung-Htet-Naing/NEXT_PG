import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../assets/img/icon.png';

const Company = () => (

  <section id="company">
    <section className="Contact py-6 bg-white ">
      <div className="text-center">
        <h1 className="font-bold">Contact Us</h1>
        <p className="font-color-black ">
          NEXPG is looking for member stores.
        <br />
Please use the form below to inquire about usage, payment service introduction,
          and charges.
        </p>
        <div className="nexpg_more_btn-wrap">
          <Link to="https://nexidea.ai/contact" target="_blank" className="nexpg-contact_btn">
            Contact Us
<img src={Icon} className="icon-pack " alt="icon-pack" />
          </Link>
        </div>
      </div>
    </section>
    <section className="nexpg_company_info text-center py-6">
      <div className="m-auto">
        <h1 className="font-bold">Company</h1>
        <p className="mb-1">
          NEXIDEA is a company that continues to innovate and challenge.
<br />
          We develop AI algorithms to solve social issues in Myanmar and overseas
<br />
          {' '}
and then develop and provide AI-implemented services,
{' '}
          <br />
Payment Gateway Integration, Web Solution Development and Experimental Event Development.
        </p>
        <p className="mt-2">
          By continuing to build a rich cycle between people and technology,
<br />
we will open up human potential and provide happiness all over the world.
        </p>
        <p className="font-small">
          <span className="font-bold">NEXIDEA Company Limited </span>
          <br />
No(14), 1st floor, Kwin Kyaung Street(Strand Block), Ahlone Township, Yangon, Myanmar
        </p>
        <div className="mt-5 nexpg_more_btn-wrap">
          <Link to="http://nexidea.ai/" target="_blank" className="nexpg_more_btn">
            MORE
<img src={Icon} className="icon-pack" alt="icon" />
          </Link>
        </div>
      </div>
    </section>
    <section className="policy_term layout-flex flex-space-between">
      <div className="policy">
        <ul>
          <li className="mr-2"><Link to="/">Term of use</Link></li>
          <li className="mx-2"><Link to="/">Privacy Policy</Link></li>
          <li className="mx-2"><Link to="/">Cardholder Agreement</Link></li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="mx-2 social "><Link to="/"><i className="fab fa-instagram" /></Link></li>
          <li className="mx-2 social "><Link to="/"><i className="fab fa-twitter " /></Link></li>
          <li className="ml-2 social"><Link to="/"><i className="fab fa-facebook-f " /></Link></li>
        </ul>
      </div>
    </section>
  </section>
);

export default Company;
