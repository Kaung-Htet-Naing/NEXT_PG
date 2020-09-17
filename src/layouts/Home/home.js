import React from 'react';
import { Link as Scroll } from 'react-scroll';
import { Link } from 'react-router-dom';
import AYATRA from '../../assets/img/ayatra.png';
import AyatraSm from '../../assets/img/ayatra_sm.png';
import curveinverse from '../../assets/img/curve-inverse.png';
import Icon from '../../assets/img/icon.png';
import Jcb from '../../assets/img/jcb.png';
import JcbSm from '../../assets/img/jcb_sm.png';
import LogoNexpg from '../../assets/img/logo_nexpg.png';
import LogoNexpgWhite from '../../assets/img/logo_nexpg_white.png';
import Mainpage from '../../assets/img/mainpage.jpeg';
import Master from '../../assets/img/master.png';
import MastercardSm from '../../assets/img/mastercard_sm.png';
import Mpu from '../../assets/img/mpu.png';
import MpuSm from '../../assets/img/mpu_sm.png';
import UnionPaySm from '../../assets/img/UnionPay_sm.png';
import UnionPayLogo from '../../assets/img/UnionPay_logo.png';
import Visa from '../../assets/img/visa.png';
import VisaSm from '../../assets/img/visa_sm.png';

import './home.css';

const Home = () => (
  <div>
    <div className="reponsive_sidebar">
      <div className="layout-flex flex-start flex-item-center">
        <ul>
          {' '}
          <li>
            <Scroll
              activeClass="active"
              duration={500}
              offset={-70}
              smooth
              spy
              to="About"
            >
              About
            </Scroll>
          </li>
          <li>
            <Scroll
              activeClass="active"
              duration={500}
              offset={-70}
              smooth
              spy
              to="Our_network"
            >
              Our Network
            </Scroll>
          </li>
          <li>
            <Scroll
              activeClass="active"
              duration={500}
              offset={-70}
              smooth
              spy
              to="Feature"
            >
              Feature
            </Scroll>
          </li>
          <li>
            <Scroll
              activeClass="active"
              duration={500}
              offset={-70}
              smooth
              spy
              to="benefit"
            >
              Benefits
            </Scroll>
          </li>
          <li>
            <Scroll
              activeClass="active"
              duration={500}
              offset={-70}
              smooth
              spy
              to="company"
            >
              Company
            </Scroll>
          </li>
        </ul>
      </div>
    </div>
    {/* heade section */}
    <header className="fixed-top">
      <div className="nexpg-inner-header layout-flex flex-space-between">
        <div className="nexpg-header-logo">
          <Link to="/"><img
            alt="NexPG - Myanmar Best Payment Gateway"
            src={LogoNexpg}
          /></Link>
        </div>
        <div className="layout-flex flex-start flex-item-center">
          <nav className=" layout-flex flex-end flex-item-center">
            <ul className="navbar_color d-n d-lg-b ">
              <li>
                <Scroll
                  activeClass="active"
                  duration={500}
                  offset={-70}
                  smooth
                  spy
                  to="About"
                >
                  About
                </Scroll>
              </li>
              <li>
                <Scroll
                  activeClass="active"
                  duration={500}
                  offset={-70}
                  smooth
                  spy
                  to="Our_network"
                >
                  Our Network
                </Scroll>
              </li>
              <li>
                <Scroll
                  activeClass="active"
                  duration={500}
                  offset={-70}
                  smooth
                  spy
                  to="Feature"
                >
                  Feature
                </Scroll>
              </li>
              <li>
                <Scroll
                  activeClass="active"
                  duration={500}
                  offset={-70}
                  smooth
                  spy
                  to="benefit"
                >
                  Benefits
                </Scroll>
              </li>
              <li>
                <Scroll
                  activeClass="active"
                  duration={500}
                  offset={-70}
                  smooth
                  spy
                  to="company"
                >
                  Company
                </Scroll>
              </li>
            </ul>
            <Link
              className="contact-us d-n d-lg-b"
              to="/auth/register"
            >
              Register
              <img
                alt="icon"
                className="icon"
                src={Icon}
              />
            </Link>
          </nav>
          <div className="navicon d-b d-lg-n">
            <button type="button">
              <svg
                viewBox="0 0 24.75 24.75"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M0,3.875c0-1.104,0.896-2,2-2h20.75c1.104,0,2,0.896,2,2s-0.896,2-2,2H2C0.896,5.875,0,4.979,0,3.875z M22.75,10.375H2
                c-1.104,0-2,0.896-2,2c0,1.104,0.896,2,2,2h20.75c1.104,0,2-0.896,2-2C24.75,11.271,23.855,10.375,22.75,10.375z M22.75,18.875H2
                c-1.104,0-2,0.896-2,2s0.896,2,2,2h20.75c1.104,0,2-0.896,2-2S23.855,18.875,22.75,18.875z"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
    {/* header end */}
    <main className="main_section">
      <section
        className="nexpg-homepage"
        style={{ background: `linear-gradient(90deg, rgba(67, 255, 255, 0.6)0%, rgba(152,166,235,0.6) 50%, rgba(86,17,98,0.8) 100%),url(${Mainpage})`, backgroundSize: 'cover' }}
      >
        <div className="layout-flex flex-item-center">
          <div className="m-auto text-center">
            <img
              alt="nex-pg Logo"
              className="nexpg-icon-logo"
              src={LogoNexpgWhite}
            />
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
      <section
        className="About py-6 bg-white"
        id="About"
      >
        <div className="m-auto text-center">
          <h1 className="font-bold">About</h1>
          <h4 className="font-color-black">
            To facilitate electronic payment and cashless in Myanmar,
            {' '}
            <br />
we provide
                comprehensive Myanmar Payment Gateway Integration Service &quotNEXPG&quot.
          </h4>
        </div>
        <div className="my-4">
          <div className="about-wrapper">
            <h2>Wide range of payment methods are available.</h2>
            <div className=" payment_card_grid  mt-3 mb-3 m-auto layout-grid g-6 grid-gap-30 ie-flex">
              <div className="text-center">
                <div className="payment-card-thumb ">
                  <svg
                    className="about_payment_icon m-auto"
                    height="512px"
                    version="1.1"
                    viewBox="0 0 937.5 937.5"
                    width="512px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <g id="surface1">
                        <path
                          className="active-path"
                          d="M 781.25 165.53125 L 781.25 78.125 C 781.195312 35 746.25 0.0546875 703.125 0 L 78.125 0 C 35 0.0546875 0.0546875 35 0 78.125 L 0 421.875 C 0.121094 461.777344 30.367188 495.148438 70.0625 499.195312 L 128.796875 651.660156 C 144.3125 691.917969 189.523438 711.972656 229.785156 696.476562 L 596.5625 555.1875 C 571.21875 621.386719 578.429688 695.648438 616.023438 755.738281 L 625 770.09375 L 625 921.875 C 625 930.507812 631.992188 937.5 640.625 937.5 L 921.875 937.5 C 930.507812 937.5 937.5 930.507812 937.5 921.875 L 937.5 406.113281 C 937.351562 352.078125 915.839844 300.304688 877.636719 262.089844 Z M 781.25 258.976562 L 828.671875 382.078125 C 837.964844 406.242188 825.921875 433.355469 801.761719 442.65625 L 774.65625 453.125 C 778.984375 443.273438 781.226562 432.625 781.25 421.875 Z M 31.25 421.875 L 31.25 78.125 C 31.25 52.242188 52.242188 31.25 78.125 31.25 L 703.125 31.25 C 729.007812 31.25 750 52.242188 750 78.125 L 750 177.4375 L 749.863281 177.4375 L 750 177.792969 L 750 421.875 C 749.878906 424.601562 749.523438 427.304688 748.9375 429.96875 L 605.8125 286.828125 C 573.640625 255.398438 522.351562 255.15625 489.890625 286.257812 C 457.421875 317.378906 455.472656 368.628906 485.5 402.105469 L 546.515625 468.75 L 78.125 468.75 C 52.242188 468.75 31.25 447.757812 31.25 421.875 Z M 231.421875 500 L 120.3125 542.777344 L 103.875 500 Z M 218.546875 667.308594 C 194.390625 676.621094 167.261719 664.578125 157.953125 640.421875 L 131.59375 571.875 L 318.109375 500 L 318.109375 499.90625 L 575.15625 499.90625 L 595.464844 522.046875 Z M 906.25 906.25 L 656.25 906.25 L 656.25 781.25 L 906.25 781.25 Z M 906.25 750 L 649.296875 750 L 642.519531 739.171875 C 604.421875 678.289062 602.90625 601.390625 638.5625 539.0625 C 641.9375 533.164062 641.109375 525.757812 636.515625 520.75 L 508.472656 381.0625 C 489.378906 360.164062 490.453125 327.855469 510.894531 308.28125 C 531.34375 288.703125 563.667969 289.023438 583.714844 308.992188 L 832.703125 557.921875 L 854.796875 535.828125 L 796.984375 478.015625 L 813.015625 471.765625 C 853.242188 456.246094 873.289062 411.074219 857.8125 370.824219 L 804.925781 233.496094 L 855.542969 284.21875 C 887.886719 316.554688 906.125 360.375 906.25 406.113281 Z M 906.25 750 "
                          data-old_color="#000000"
                          data-original="#000000"
                          fill="#3B53AF"
                        />
                        <path
                          className="active-path"
                          d="M 178.125 218.75 C 200.5625 218.75 218.75 200.5625 218.75 178.125 L 218.75 103.125 C 218.75 80.6875 200.5625 62.5 178.125 62.5 L 103.125 62.5 C 80.6875 62.5 62.5 80.6875 62.5 103.125 L 62.5 178.125 C 62.5 200.5625 80.6875 218.75 103.125 218.75 Z M 93.75 178.125 L 93.75 156.25 L 125 156.25 L 125 125 L 93.75 125 L 93.75 103.125 C 93.75 97.949219 97.949219 93.75 103.125 93.75 L 178.125 93.75 C 183.300781 93.75 187.5 97.949219 187.5 103.125 L 187.5 125 L 156.25 125 L 156.25 156.25 L 187.5 156.25 L 187.5 178.125 C 187.5 183.300781 183.300781 187.5 178.125 187.5 L 103.125 187.5 C 97.949219 187.5 93.75 183.300781 93.75 178.125 Z M 93.75 178.125 "
                          data-old_color="#000000"
                          data-original="#000000"
                          fill="#3B53AF"
                        />
                        <path
                          className="active-path"
                          d="M 78.125 265.625 L 140.625 265.625 L 140.625 296.875 L 78.125 296.875 Z M 78.125 265.625 "
                          data-old_color="#000000"
                          data-original="#000000"
                          fill="#3B53AF"
                        />
                        <path
                          className="active-path"
                          d="M 78.125 359.375 L 140.625 359.375 L 140.625 390.625 L 78.125 390.625 Z M 78.125 359.375 "
                          data-old_color="#000000"
                          data-original="#000000"
                          fill="#3B53AF"
                        />
                        <path
                          className="active-path"
                          d="M 359.375 359.375 L 421.875 359.375 L 421.875 390.625 L 359.375 390.625 Z M 359.375 359.375 "
                          data-old_color="#000000"
                          data-original="#000000"
                          fill="#3B53AF"
                        />
                        <path
                          className="active-path"
                          d="M 171.875 265.625 L 234.375 265.625 L 234.375 296.875 L 171.875 296.875 Z M 171.875 265.625 "
                          data-old_color="#000000"
                          data-original="#000000"
                          fill="#3B53AF"
                        />
                        <path
                          className="active-path"
                          d="M 265.625 265.625 L 328.125 265.625 L 328.125 296.875 L 265.625 296.875 Z M 265.625 265.625 "
                          data-old_color="#000000"
                          data-original="#000000"
                          fill="#3B53AF"
                        />
                        <path
                          className="active-path"
                          d="M 359.375 265.625 L 421.875 265.625 L 421.875 296.875 L 359.375 296.875 Z M 359.375 265.625 "
                          data-old_color="#000000"
                          data-original="#000000"
                          fill="#3B53AF"
                        />
                        <path
                          className="active-path"
                          d="M 656.25 78.125 L 687.5 78.125 L 687.5 125 L 656.25 125 Z M 656.25 78.125 "
                          data-old_color="#000000"
                          data-original="#000000"
                          fill="#3B53AF"
                        />
                        <path
                          className="active-path"
                          d="M 593.75 78.125 L 625 78.125 L 625 125 L 593.75 125 Z M 593.75 78.125 "
                          data-old_color="#000000"
                          data-original="#000000"
                          fill="#3B53AF"
                        />
                        <path
                          className="active-path"
                          d="M 531.25 78.125 L 562.5 78.125 L 562.5 125 L 531.25 125 Z M 531.25 78.125 "
                          data-old_color="#000000"
                          data-original="#000000"
                          fill="#3B53AF"
                        />
                        <path
                          className="active-path"
                          d="M 468.75 78.125 L 500 78.125 L 500 125 L 468.75 125 Z M 468.75 78.125 "
                          data-old_color="#000000"
                          data-original="#000000"
                          fill="#3B53AF"
                        />
                        <path
                          className="active-path"
                          d="M 687.5 812.5 L 718.75 812.5 L 718.75 843.75 L 687.5 843.75 Z M 687.5 812.5 "
                          data-old_color="#000000"
                          data-original="#000000"
                          fill="#3B53AF"
                        />
                      </g>
                    </g>
                    {' '}

                  </svg>
                </div>
                <p className="font-color-black">Debit Card Payment</p>
              </div>
              <div className="text-center">
                <div className="payment-card-thumb layout-flex flex-item-center">
                  <svg
                    className="about_payment_icon m-auto hovered-paths"
                    height="512px"
                    viewBox="0 0 464 464"
                    width="512px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        className="hovered-path active-path"
                        d="m267.308594 416.003906 44.691406-44.691406 12.6875 12.6875-44.691406 44.691406zm0 0"
                        data-old_color="#000000"
                        data-original="#000000"
                        fill="#3B53AF"
                      />
                      <path
                        className="hovered-path active-path"
                        d="m243.308594 392.003906 44.691406-44.691406 12.6875 12.6875-44.691406 44.691406zm0 0"
                        data-old_color="#000000"
                        data-original="#000000"
                        fill="#3B53AF"
                      />
                      <path
                        className="hovered-path active-path"
                        d="m219.308594 368.003906 44.691406-44.691406 12.6875 12.6875-44.691406 44.691406zm0 0"
                        data-old_color="#000000"
                        data-original="#000000"
                        fill="#3B53AF"
                      />
                      <path
                        className="hovered-path active-path"
                        d="m195.308594 344.003906 44.691406-44.691406 12.6875 12.6875-44.6875 44.691406zm0 0"
                        data-old_color="#000000"
                        data-original="#000000"
                        fill="#3B53AF"
                      />
                      <path
                        className="hovered-path active-path"
                        d="m147.3125 72 132.6875 132.6875 33.648438-33.648438c-12.839844-9.671874-23.359376-22.199218-30.617188-36.695312l-99.03125-99.03125zm0 0"
                        data-old_color="#000000"
                        data-original="#000000"
                        fill="#3B53AF"
                      />
                      <path
                        className="hovered-path active-path"
                        d="m376 176c48.519531 0 88-39.480469 88-88s-39.480469-88-88-88-88 39.480469-88 88 39.480469 88 88 88zm40-40c-4.414062 0-8-3.574219-8-8s3.585938-8 8-8 8 3.574219 8 8-3.585938 8-8 8zm-80-96c4.414062 0 8 3.574219 8 8s-3.585938 8-8 8-8-3.574219-8-8 3.585938-8 8-8zm-8 64c0-7.304688 2.839844-14.167969 8-19.3125l10.34375-10.34375 11.3125 11.3125-10.34375 10.34375c-2.105469 2.105469-3.3125 5.015625-3.3125 8 0 3.023438 1.175781 5.855469 3.320312 8l12.679688 12.6875 12.6875-12.6875c2.136719-2.144531 3.3125-4.976562 3.3125-8s-1.175781-5.855469-3.320312-8l-4.679688-4.6875c-5.160156-5.160156-8-12.023438-8-19.3125 0-7.304688 2.839844-14.167969 8-19.3125l24-24 16 16 10.34375-10.34375 11.3125 11.3125-10.671875 10.671875c3.222656 4.558594 5.015625 9.96875 5.015625 15.671875 0 7.289062-2.839844 14.152344-8 19.3125l-10.34375 10.34375-11.3125-11.3125 10.34375-10.34375c2.136719-2.144531 3.3125-4.976562 3.3125-8s-1.175781-5.855469-3.320312-8l-12.679688-12.6875-12.6875 12.6875c-2.105469 2.105469-3.3125 5.015625-3.3125 8 0 3.023438 1.175781 5.855469 3.320312 8l4.679688 4.6875c5.160156 5.160156 8 12.023438 8 19.3125s-2.839844 14.152344-8 19.3125l-24 24-16-16-10.34375 10.34375-11.3125-11.3125 10.664062-10.671875c-3.214843-4.558594-5.007812-9.96875-5.007812-15.671875zm0 0"
                        data-old_color="#000000"
                        data-original="#000000"
                        fill="#3B53AF"
                      />
                      <path
                        className="hovered-path active-path"
                        d="m432 280c0 8.835938-7.164062 16-16 16s-16-7.164062-16-16 7.164062-16 16-16 16 7.164062 16 16zm0 0"
                        data-old_color="#000000"
                        data-original="#000000"
                        fill="#3B53AF"
                      />
                      <path
                        className="hovered-path active-path"
                        d="m171.308594 320.003906 44.691406-44.691406 12.6875 12.691406-44.6875 44.6875zm0 0"
                        data-old_color="#000000"
                        data-original="#000000"
                        fill="#3B53AF"
                      />
                      <path
                        className="hovered-path active-path"
                        d="m387.953125 191.257812c-3.929687.453126-7.90625.742188-11.953125.742188-17.542969 0-34.0625-4.40625-48.574219-12.113281l-47.425781 47.425781-155.3125-155.3125 59.3125-59.3125 89.007812 89.007812c-.59375-4.496093-1.007812-9.039062-1.007812-13.695312 0-4.046875.289062-8.015625.742188-11.945312l-67.085938-67.085938c-11.566406-11.5625-31.746094-11.5625-43.3125 0l-153.375 153.375c-5.695312 5.703125-8.96875 13.59375-8.96875 21.65625s3.273438 15.953125 8.96875 21.65625l249.375 249.375c11.566406 11.5625 31.746094 11.5625 43.3125 0l153.375-153.375c5.695312-5.703125 8.96875-13.59375 8.96875-21.65625s-3.273438-15.953125-8.96875-21.65625zm-46.296875-4.914062 48 48-11.3125 11.3125-48-48zm-24 24 48 48-11.3125 11.3125-48-48zm-208-128 96 96-11.3125 11.3125-96-96zm-24 24 96 96-11.3125 11.3125-96-96zm-75.3125 80 32-32 11.3125 11.3125-32 32zm24 24 32-32 11.3125 11.3125-32 32zm24 24 32-32 11.3125 11.3125-32 32zm35.3125 35.3125-11.3125-11.3125 32-32 11.3125 11.3125zm186.34375 181.65625-131.3125-131.3125 67.3125-67.3125 131.3125 131.3125zm82.34375-77.65625-104-104 11.3125-11.3125 104 104zm24-24-104-104 11.3125-11.3125 104 104zm29.65625-37.65625c-17.648438 0-32-14.351562-32-32s14.351562-32 32-32 32 14.351562 32 32-14.351562 32-32 32zm0 0"
                        data-old_color="#000000"
                        data-original="#000000"
                        fill="#3B53AF"
                      />
                    </g>
                  </svg>
                </div>
                <p className="font-color-black">Prepaid Card Payment</p>
              </div>
              <div className="text-center">
                <div className="payment-card-thumb layout-flex flex-item-center ">
                  <svg
                    className="about_payment_icon m-auto"
                    height="302px"
                    preserveAspectRatio="xMidYMid"
                    style={{ color: '#6E5284' }}
                    version="1.1"
                    viewBox="0 0 256 302"
                    width="256px"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g>
                      <path
                        d="M217.168476,23.5070146 C203.234077,7.62479651 178.045612,0.815753338 145.823355,0.815753338 L52.3030619,0.815753338 C45.7104431,0.815753338 40.1083819,5.6103852 39.0762042,12.1114399 L0.136468302,259.076601 C-0.637664968,263.946149 3.13311322,268.357876 8.06925331,268.357876 L65.804612,268.357876 L80.3050438,176.385849 L79.8555471,179.265958 C80.8877248,172.764903 86.4481659,167.970272 93.0324607,167.970272 L120.46841,167.970272 C174.366398,167.970272 216.569147,146.078116 228.897012,82.7490197 C229.263268,80.8761167 229.579581,79.0531577 229.854273,77.2718188 C228.297683,76.4477414 228.297683,76.4477414 229.854273,77.2718188 C233.525163,53.8646924 229.829301,37.9325302 217.168476,23.5070146"
                        fill="#27346A"
                      />
                      <path
                        d="M102.396976,68.8395929 C103.936919,68.1070797 105.651665,67.699203 107.449652,67.699203 L180.767565,67.699203 C189.449511,67.699203 197.548776,68.265236 204.948824,69.4555699 C207.071448,69.7968545 209.127479,70.1880831 211.125242,70.6375799 C213.123006,71.0787526 215.062501,71.5781934 216.943728,72.1275783 C217.884341,72.4022708 218.808307,72.6852872 219.715624,72.9849517 C223.353218,74.2002577 226.741092,75.61534 229.854273,77.2718188 C233.525163,53.8563683 229.829301,37.9325302 217.168476,23.5070146 C203.225753,7.62479651 178.045612,0.815753338 145.823355,0.815753338 L52.2947379,0.815753338 C45.7104431,0.815753338 40.1083819,5.6103852 39.0762042,12.1114399 L0.136468302,259.068277 C-0.637664968,263.946149 3.13311322,268.349552 8.0609293,268.349552 L65.804612,268.349552 L95.8875974,77.5798073 C96.5035744,73.6675208 99.0174265,70.4627756 102.396976,68.8395929 Z"
                        fill="#27346A"
                      />
                      <path
                        d="M228.897012,82.7490197 C216.569147,146.069792 174.366398,167.970272 120.46841,167.970272 L93.0241367,167.970272 C86.4398419,167.970272 80.8794007,172.764903 79.8555471,179.265958 L61.8174095,293.621258 C61.1431644,297.883153 64.4394738,301.745495 68.7513129,301.745495 L117.421821,301.745495 C123.182038,301.745495 128.084882,297.550192 128.983876,291.864891 L129.458344,289.384335 L138.631407,231.249423 L139.222412,228.036354 C140.121406,222.351053 145.02425,218.15575 150.784467,218.15575 L158.067979,218.15575 C205.215193,218.15575 242.132193,199.002194 252.920115,143.605884 C257.423406,120.456802 255.092683,101.128442 243.181019,87.5519756 C239.568397,83.4399129 235.081754,80.0437153 229.854273,77.2718188 C229.571257,79.0614817 229.263268,80.8761167 228.897012,82.7490197 L228.897012,82.7490197 Z"
                        fill="#2790C3"
                      />
                      <path
                        d="M216.952052,72.1275783 C215.070825,71.5781934 213.13133,71.0787526 211.133566,70.6375799 C209.135803,70.1964071 207.071448,69.8051785 204.957148,69.4638939 C197.548776,68.265236 189.457835,67.699203 180.767565,67.699203 L107.457976,67.699203 C105.651665,67.699203 103.936919,68.1070797 102.4053,68.8479169 C99.0174265,70.4710996 96.5118984,73.6675208 95.8959214,77.5881313 L80.3133678,176.385849 L79.8638711,179.265958 C80.8877248,172.764903 86.4481659,167.970272 93.0324607,167.970272 L120.476734,167.970272 C174.374722,167.970272 216.577471,146.078116 228.905336,82.7490197 C229.271592,80.8761167 229.579581,79.0614817 229.862597,77.2718188 C226.741092,75.623664 223.361542,74.2002577 219.723948,72.9932757 C218.816631,72.6936112 217.892665,72.4022708 216.952052,72.1275783"
                        fill="#1F264F"
                      />
                    </g>
                  </svg>
                </div>
                <p className="font-color-black">Paypal</p>
              </div>
              <div className="text-center">
                <div className="payment-card-thumb  layout-flex flex-item-center">
                  <svg
                    className="about_payment_icon m-auto"
                    viewBox="0 0 611.996 611.996"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <g>
                        <path
                          d="M588.63,113.193L213.812,33.871c-15.858-3.355-31.576,6.876-34.931,22.734l-7.121,45.762l432.477,91.519l7.121-45.762 C614.713,132.272,604.488,116.549,588.63,113.193z"
                          fill="#3020AF"
                        />
                        <path
                          d="M431.009,203.591c-4.378-15.766-20.854-25.085-36.615-20.714L323.24,202.63l-167.742-35.5l-18.448,87.165L21.786,286.287 c-15.76,4.372-25.079,20.848-20.708,36.609l64.958,234.078c4.378,15.76,20.855,25.085,36.615,20.708l372.608-103.403 c15.76-4.378,25.079-20.848,20.708-36.615l-11.15-40.184l41.789,8.835c15.858,3.361,31.576-6.87,34.931-22.728l26.439-124.937 L437.45,226.797L431.009,203.591z M474.04,322.559l9.215-43.552c1.384-6.521,7.85-10.727,14.37-9.35l43.552,9.221 c6.527,1.384,10.733,7.843,9.356,14.37l-9.215,43.552c-1.384,6.521-7.849,10.733-14.37,9.35l-43.552-9.215 C476.863,335.546,472.656,329.08,474.04,322.559z M28.27,309.646l103.115-28.606l243.299-67.517l26.181-7.274 c0.478-0.129,0.955-0.19,1.421-0.19c2.1,0,4.611,1.378,5.345,4.017l3.074,11.07l9.631,34.704L37.148,362.186l-12.705-45.768 C23.647,313.546,25.399,310.442,28.27,309.646z M472.601,444.141c0.49,1.776-0.024,3.245-0.545,4.164 c-0.514,0.918-1.506,2.119-3.282,2.608L96.173,554.316c-0.471,0.129-0.955,0.196-1.421,0.196c-2.1,0-4.611-1.384-5.345-4.023 L51.519,413.955l383.188-106.342l23.371,84.208L472.601,444.141z"
                          fill="#3020AF"
                        />
                        <path
                          d="M156.379,453.484c-1.788-6.429-8.499-10.225-14.928-8.443l-43.515,12.08c-6.423,1.782-10.225,8.499-8.437,14.928 l12.074,43.509c1.788,6.429,8.499,10.225,14.928,8.437l43.515-12.074c6.429-1.782,10.225-8.499,8.443-14.928L156.379,453.484z"
                          fill="#3020AF"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <p className="font-color-black">
                  Credit Card
                  <br />
Payment
                </p>
              </div>
              <div className=" text-center">
                <div className="payment-card-thumb layout-flex flex-item-center">
                  <svg
                    className="about_payment_icon m-auto"
                    height="512pt"
                    viewBox="-104 0 512 512.00103"
                    width="512pt"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m234.089844 0h-163.980469c-38.660156 0-70.109375 31.453125-70.109375 70.109375v371.78125c0 38.660156 31.449219 70.109375 70.109375 70.109375h163.980469c38.65625 0 70.109375-31.449219 70.109375-70.109375v-371.78125c0-38.65625-31.453125-70.109375-70.109375-70.109375zm-163.980469 481.179688c-21.664063 0-39.289063-17.625-39.289063-39.289063v-10.453125h242.558594v10.453125c0 21.664063-17.625 39.289063-39.289062 39.289063zm163.980469-450.359376c21.664062 0 39.289062 17.625 39.289062 39.289063v10.453125h-242.558594v-10.453125c0-21.664063 17.625-39.289063 39.289063-39.289063zm39.289062 80.5625v289.234376h-242.558594v-289.234376zm0 0"
                      fill="#3020AF"
                    />
                    <path
                      d="m152.097656 291.925781h-25.667968c-8.507813 0-15.40625 6.898438-15.40625 15.410157 0 8.507812 6.898437 15.410156 15.40625 15.410156h10.257812v7.21875c0 8.507812 6.902344 15.410156 15.410156 15.410156 8.511719 0 15.410156-6.902344 15.410156-15.410156v-10.230469c15.035157-6.109375 25.667969-20.863281 25.667969-38.066406 0-22.648438-18.429687-41.078125-41.078125-41.078125-5.65625 0-10.257812-4.601563-10.257812-10.257813s4.601562-10.257812 10.257812-10.257812h25.667969c8.511719 0 15.410156-6.898438 15.410156-15.410157 0-8.507812-6.898437-15.410156-15.410156-15.410156h-10.257813v-7.21875c0-8.507812-6.898437-15.410156-15.410156-15.410156-8.507812 0-15.410156 6.902344-15.410156 15.410156v10.230469c-15.035156 6.109375-25.664062 20.863281-25.664062 38.066406 0 22.648438 18.425781 41.078125 41.074218 41.078125 5.65625 0 10.257813 4.601563 10.257813 10.257813s-4.601563 10.257812-10.257813 10.257812zm0 0"
                      fill="#3020AF"
                    />
                  </svg>
                </div>
                <p className="font-color-black">
                  Electronic
                  <br />
Money
                </p>
              </div>
              <div className=" text-center">
                <div className="payment-card-thumb layout-flex flex-item-center">
                  <svg
                    className="about_payment_icon m-auto"
                    viewBox="0 0 47.001 47.001"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <g>
                        <g>
                          <path
                            d="M44.845,42.718H2.136C0.956,42.718,0,43.674,0,44.855c0,1.179,0.956,2.135,2.136,2.135h42.708 c1.18,0,2.136-0.956,2.136-2.135C46.979,43.674,46.023,42.718,44.845,42.718z"
                            fill="#3020AF"
                          />
                          <path
                            d="M4.805,37.165c-1.18,0-2.136,0.956-2.136,2.136s0.956,2.137,2.136,2.137h37.37c1.18,0,2.136-0.957,2.136-2.137 s-0.956-2.136-2.136-2.136h-0.533V17.945h0.533c0.591,0,1.067-0.478,1.067-1.067s-0.478-1.067-1.067-1.067H4.805 c-0.59,0-1.067,0.478-1.067,1.067s0.478,1.067,1.067,1.067h0.534v19.219H4.805z M37.37,17.945v19.219h-6.406V17.945H37.37z M26.692,17.945v19.219h-6.406V17.945H26.692z M9.609,17.945h6.406v19.219H9.609V17.945z"
                            fill="#3020AF"
                          />
                          <path
                            d="M2.136,13.891h42.708c0.007,0,0.015,0,0.021,0c1.181,0,2.136-0.956,2.136-2.136c0-0.938-0.604-1.733-1.443-2.021 l-21.19-9.535c-0.557-0.25-1.194-0.25-1.752,0L1.26,9.808c-0.919,0.414-1.424,1.412-1.212,2.396 C0.259,13.188,1.129,13.891,2.136,13.891z"
                            fill="#3020AF"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <p className="font-color-black">
                  Bank
                  <br />
Payment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="Our_network py-6 "
        id="Our_network"
      >
        <div className="m-auto text-center">
          <h1 className="my-3 font-bold">Our Network</h1>
          <h4 className="font-color-black">
            NEXPG supports all payment methods such as credit cards and debit cards, electronic money,
            bank payments, contact/contactless ICs, QR codes, and mobile terminals.
          </h4>
        </div>
        <div className="link-icon-width layout-grid m-auto g-4 grid-gap-70 my-4 text-center ie-flex">
          <img
            alt="MPU Myanmar"
            className="link-icon-medium"
            src={Mpu}
          />
          <img
            alt="AYA Myanmar Payment"
            className="link-icon-medium"
            src={AYATRA}
          />
          <img
            alt="UnionPay Myanmar"
            className="link-icon-medium"
            src={UnionPayLogo}
          />
          <img
            alt="visa Myanmar"
            className="link-icon-medium"
            src={Visa}
          />
          <img
            alt="master Myanmar"
            className="link-icon-medium"
            src={Master}
          />
          <img
            alt="Jcb Myanmar"
            className="link-icon-medium"
            src={Jcb}
          />
        </div>
      </section>
      <section
        className="Feature py-6 bg-white"
        id="Feature"
      >
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
              <img
                alt="AYA Myanmar"
                className="npg-icon-medium mr-3"
                src={AyatraSm}
              />
              <img
                alt="UnionPay Myanmar"
                className="npg-icon-medium ml-3"
                src={UnionPaySm}
              />
            </div>
            <div
              className="oval-inverse"
              style={{ background: `url(${curveinverse})`, backgroundSize: '100% 100%', backgroundPosition: 'center' }}
            >
              <h5 className="font-bold">Debit</h5>
              <p className="px-4">
                Compatible with widely used debits cards. Improve user experience.
              </p>
            </div>
          </div>
          <div className="feature-card-thumb py-0 px-0 layout-grid g-1">
            <div className="layout-flex flex-space-around py-5 ">
              <img
                alt="visa Myanmar"
                className="npg-icon-medium"
                src={VisaSm}
              />
              <img
                alt="master Myanmar"
                className="npg-icon-medium"
                src={MastercardSm}
              />
              <img
                alt="Jcb Myanmar"
                className="npg-icon-medium"
                src={JcbSm}
              />
            </div>
            <div
              className="oval-inverse"
              style={{ background: `url(${curveinverse})`, backgroundSize: '100% 100%', backgroundPosition: 'center' }}
            >
              <h5 className="font-bold">Credit</h5>
              <p className="px-4 font-color-black mb-0">
                Compatible with international brand companies. Contributes to the enhancement of your brand power.
              </p>
            </div>
          </div>
          <div className="feature-card-thumb px-0 py-0 layout-grid g-1">
            <div className="py-5">
              <img
                alt="mpu"
                className="npg-icon-medium"
                src={MpuSm}
              />
            </div>
            <div
              className="oval-inverse"
              style={{ background: `url(${curveinverse})`, backgroundSize: '100% 100%', backgroundPosition: 'center' }}
            >
              <h5 className="font-bold">MPU</h5>
              <p className="px-4">
                We are under the umbrella of MPU. We can offer flexible transaction through various banks.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="Benefit py-6"
        id="benefit"
      >
        <div className="m-auto text-center">
          <h1 className="font-bold">Benefits</h1>
          <h4 className="font-color-black">
            NEXPG supports the business of sales operators
            {' '}
            <br />
by providing a fast, safe and secure payment at a low price.
          </h4>
        </div>
        <div className="benefit-card text-center layout-grid g-3 mt-4 grid-gap-30 ie-flex">
          <div className="benefit-card-thumb py-4">
            <svg
              className="npg-icon-xlarge"
              viewBox="0 0 511 511.99978"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m235.792969 347.265625c3.902343-3.910156 3.902343-10.238281 0-14.148437-3.90625-3.898438-10.234375-3.898438-14.144531 0-3.898438 3.910156-3.898438 10.238281 0 14.148437 3.910156 3.898437 10.238281 3.898437 14.144531 0zm0 0"
                fill="#3020af"
              />
              <path
                d="m188.449219 109.96875c0 60.636719 49.332031 109.972656 109.96875 109.972656s109.96875-49.335937 109.96875-109.972656-49.332031-109.96875-109.96875-109.96875-109.96875 49.332031-109.96875 109.96875zm199.945312 0c0 49.613281-40.363281 89.976562-89.976562  89.976562s-89.976563-40.363281-89.976563-89.976562c0-49.609375 40.363282-89.972656   89.976563-89.972656s89.976562 40.363281 89.976562 89.972656zm0 0"
                fill="#3020af"
              />
              <path
                d="m115.652344 509.042969c3.875 3.90625 10.183594 3.949219 14.109375.082031l48.46875-47.75c8.234375-8.234375 10.738281-20.425781 7.117187-31.023438l10.425782-10.054687c5.613281-5.421875 13.003906-8.410156  20.816406-8.410156h132.902344c23.578124 0 45.863281-9.054688 62.757812-25.496094.695312-.675781-5.277344 6.359375 90.667969-108.3125 14.230469-16.835937 12.101562-42.117187-4.75-56.363281-16.746094-14.113282-41.832031-12.085938-56.101563 4.460937l-58.992187 60.632813c-7.449219-9.167969-18.808594-14.882813-31.082031-14.882813h-111.480469c-15.863281-6.636719-32.695313-9.996093-50.0625-9.996093-48.140625 0-90.175781 22.234374-112.734375 63.921874-9.503906-1.800781-19.527344 1.074219-26.738282 8.285157l-47.558593 47.699219c-3.882813 3.894531-3.890625 10.195312-.015625 14.101562zm74.792968-227.121094c15.3125 0 30.117188 3.082031 44.011719 9.160156 1.265625.554688 2.628907.839844 4.007813.839844h113.527344c10.839843 0 19.996093 8.839844 19.996093 19.992187 0 11.027344-8.96875 19.996094-19.996093 19.996094h-81.566407c-5.519531 0-9.996093 4.476563-9.996093 9.996094 0 5.523438 4.476562 9.996094 9.996093 9.996094h81.566407c22.050781 0 39.988281-17.9375 39.988281-39.988282 0-1.757812-.125-3.5-.351563-5.226562 57.066406-58.660156 65.113282-66.902344 65.457032-67.3125 7.125-8.410156 19.773437-9.476562 28.1875-2.382812 8.421874 7.121093 9.488281 19.761718 2.34375 28.21875l-89.667969 107.195312c-13.09375 12.570312-30.285157 19.488281-48.457031 19.488281h-132.902344c-13.023438 0-25.351563 4.980469-34.703125 14.015625l-8.496094 8.199219-78.320313-78.316406c18.304688-34.339844 52.652344-53.871094 95.375-53.871094zm-125.320312 66.34375c3.296875-3.296875 8.359375-3.890625 12.378906-1.40625 1.730469 1.054687-3.238281-3.46875 86.589844 86.234375 3.996094 3.996094 3.78125 10.363281.054688 14.089844l-41.320313 40.707031-98.230469-98.980469zm0 0"
                fill="#3020af"
              />
              <path
                d="m286.421875 49.988281v11.714844c-11.636719 4.125-19.996094 15.238281-19.996094 28.273437 0 16.535157 13.453125 29.992188 29.992188 29.992188 5.511719 0 9.996093 4.484375 9.996093 9.996094 0 5.511718-4.484374 9.996094-9.996093 9.996094-4.269531 0-8.882813-2.683594-12.980469-7.5625-3.554688-4.226563-9.859375-4.769532-14.085938-1.21875-4.226562 3.554687-4.773437 9.859374-1.21875 14.085937 5.34375 6.355469 11.628907 10.785156 18.289063 13.019531v11.667969c0 5.523437 4.476563 9.996094 9.996094 9.996094s9.996093-4.472657 9.996093-9.996094v-11.714844c11.636719-4.128906 19.996094-15.242187 19.996094-28.273437 0-16.539063-13.453125-29.992188-29.992187-29.992188-5.511719 0-9.996094-4.484375-9.996094-9.996094 0-5.511718 4.484375-10 9.996094-10 3.542969 0 7.28125 1.808594 10.8125 5.226563 3.96875 3.839844 10.296875 3.734375 14.136719-.230469 3.839843-3.96875 3.734374-10.296875-.230469-14.136718-5.074219-4.910157-10.152344-7.6875-14.722657-9.203126v-11.644531c0-5.523437-4.476562-10-9.996093-10s-9.996094 4.476563-9.996094 10zm0 0"
                fill="#3020af"
              />
            </svg>
            <h4 className="font-bold">Cost Benefit</h4>
            <p className="balance-text">Reduces initial costs for operators and optimizes business performance.</p>
          </div>
          <div className="benefit-card-thumb py-4">
            <svg
              className="npg-icon-xlarge"
              viewBox="0 0 428.948 428.948"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <g>
                  <path
                    d="M221.988,280.48c9.664,0,17.516-7.889,17.516-17.563c0-9.653-7.852-17.487-17.516-17.487l-79.361-58.371l61.844,76.985C205.045,273.208,212.68,280.48,221.988,280.48z"
                    fill="#3020af"
                  />
                  <rect
                    fill="#3020af"
                    height="41.513"
                    width="174.933"
                    x="127.008"
                    y="332.197"
                  />
                  <path
                    d="M366.13,118.057c-40.51-40.509-94.369-62.818-151.656-62.818 c-57.288,0-111.148,22.309-151.657,62.818S0,212.425,0,269.713c0,36.99,9.319,72.539,26.816,103.997h40.086l29.319-16.929 l-12.948-22.428l-37.7,21.768c-13.319-25.932-20.843-55.307-20.843-86.408c0-5.504,0.25-10.951,0.711-16.338l44.952,7.926 l4.497-25.504l-45.481-8.019c8.127-35.883,26.451-67.937,51.755-92.948l30.815,36.725l19.839-16.646l-31.049-37.002 c28.471-21.379,63.128-34.938,100.757-37.485v49.117h25.896V80.422c37.629,2.549,72.286,16.107,100.758,37.486l-31.05,37.001 l19.838,16.646l30.816-36.726c25.303,25.012,43.627,57.066,51.754,92.948l-45.48,8.021l4.498,25.502l44.949-7.927 c0.461,5.388,0.711,10.834,0.711,16.338c0,31.103-7.521,60.479-20.842,86.409l-37.701-21.766l-12.947,22.427l29.318,16.927h40.088 c17.498-31.458,26.816-67.007,26.816-103.997C428.949,212.424,406.638,158.564,366.13,118.057z"
                    fill="#3020af"
                  />
                </g>
              </g>
            </svg>
            <h4 className="font-bold">Business Is Speed</h4>
            <p>
              We aim to implement the payment gateway system within 3 weeks to a month
              {' '}
              <br />
              {' '}
after your registration.
            </p>
          </div>
          <div className="benefit-card-thumb ">
            <svg
              className="npg-icon-xlarge"
              viewBox="0 0 512.005 512.005"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <g>
                  <g>
                    <path
                      d="M256.003,234.672c-11.76,0-21.333,9.573-21.333,21.333c0,7.792,4.409,14.329,10.667,18.053v13.947 c0,5.896,4.771,10.667,10.667,10.667c5.896,0,10.667-4.771,10.667-10.667v-13.947c6.258-3.724,10.667-10.262,10.667-18.053C277.336,244.245,267.763,234.672,256.003,234.672z"
                      fill="#3020af"
                    />
                    <path
                      d="M256.003,149.339c-17.646,0-32,14.354-32,32v10.667h64v-10.667C288.003,163.693,273.648,149.339,256.003,149.339z"
                      fill="#3020af"
                    />
                    <path
                      d="M440.888,64.609l-181.333-64c-2.292-0.813-4.812-0.813-7.104,0l-181.333,64c-4.26,1.51-7.115,5.542-7.115,10.063v128 c0,165.646,24.563,226.188,187.198,308.188c1.51,0.76,3.156,1.146,4.802,1.146c1.646,0,3.292-0.385,4.802-1.146 c162.635-82,187.198-142.542,187.198-308.188v-128C448.003,70.151,445.148,66.12,440.888,64.609z M352.003,320.005c0,11.76-9.573,21.333-21.333,21.333H181.336c-11.76,0-21.333-9.573-21.333-21.333V213.339c0-11.76,9.573-21.333,21.333-21.333v-10.667c0-41.167,33.5-74.667,74.667-74.667s74.667,33.5,74.667,74.667v10.667c11.76,0,21.333,9.573,21.333,21.333V320.005z"
                      fill="#3020af"
                    />
                  </g>
                </g>
              </g>
            </svg>
            <h4 className="font-bold">Security Enhancement</h4>
            <p>
              We meet the Payment Card Industry Data Security Standard (PCIDSS) compliance. Tracking fraudulent activities using our AI system will also be available (2020~)
            </p>
          </div>
        </div>
      </section>
      <section id="company">
        <section className="Contact py-6 bg-white ">
          <div className="text-center">
            <h1 className="font-bold">Contact Us</h1>
            <p className="font-color-black ">
              NEXPG is looking for member stores.
              {' '}
              <br />
              {' '}
Please use the form below to inquire about usage, payment service introduction,
                  and charges.
            </p>
            <div className="nexpg_more_btn-wrap">
              <Link
                className="nexpg-contact_btn"
                target="_blank"
                to="https://nexidea.ai/contact"
              >
                Contact Us
                <img
                  alt="icon-pack"
                  className="icon-pack "
                  src={Icon}
                />
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
              <Link
                className="nexpg_more_btn"
                target="_blank"
                to="http://nexidea.ai/"
              >
                MORE
                <img
                  alt="icon"
                  className="icon-pack"
                  src={Icon}
                />
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
    </main>
    <footer className="text-center">
      <div>
        <span>
          Copyright
          <small className="font-bold">Ⓒ</small>
          {' '}
2020 NEXPG. All Rights Reserved
        </span>
      </div>
    </footer>
  </div>
);

export default Home;
