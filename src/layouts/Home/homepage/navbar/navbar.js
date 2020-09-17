import React from 'react';
import { Link as Scroll } from 'react-scroll';
import { Link } from 'react-router-dom';
import LogoNexpg from '../../../assets/img/logo_nexpg.png';
import Icon from '../../../assets/img/icon.png';

const Navbar = () => (
  <div>
    <div className="reponsive_sidebar">
      <div className="layout-flex flex-start flex-item-center">
        <ul>
          <li>
            <Scroll
              activeClass="active"
              to="About"
              spy
              smooth
              offset={-70}
              duration={500}
            >
              About
            </Scroll>
          </li>
          <li>
            <Scroll
              activeClass="active"
              to="Our_network"
              spy
              smooth
              offset={-70}
              duration={500}
            >
              Our Network
            </Scroll>
          </li>
          <li>
            <Scroll
              activeClass="active"
              to="Feature"
              spy
              smooth
              offset={-70}
              duration={500}
            >
              Feature
                </Scroll>
          </li>
          <li>
            <Scroll
              activeClass="active"
              to="benefit"
              spy
              smooth
              offset={-70}
              duration={500}
            >
              Benefits
            </Scroll>
          </li>
          <li>
            <Scroll
              activeClass="active"
              to="company"
              spy
              smooth
              offset={-70}
              duration={500}
            >
              Company
            </Scroll>
          </li>
        </ul>
      </div>
    </div>

    <header className="fixed-top">
      <div className="nexpg-inner-header layout-flex flex-space-between">
        <div className="nexpg-header-logo">
          <Link to="/"><img src={LogoNexpg} alt="NexPG - Myanmar Best Payment Gateway" /></Link>
        </div>
        <div className="layout-flex flex-start flex-item-center">
          <nav className=" layout-flex flex-end flex-item-center">
            <ul className="navbar_color d-n d-lg-b ">
              <li>
                <Scroll
                  activeClass="active"
                  to="About"
                  spy
                  smooth
                  offset={-70}
                  duration={500}
                >
                  About
            </Scroll>
              </li>
              <li>
                <Scroll
                  activeClass="active"
                  to="Our_network"
                  spy
                  smooth
                  offset={-70}
                  duration={500}
                >
                  Our Network
            </Scroll>
              </li>
              <li>
                <Scroll
                  activeClass="active"
                  to="Feature"
                  spy
                  smooth
                  offset={-70}
                  duration={500}
                >
                  Feature
                </Scroll>
              </li>
              <li>
                <Scroll
                  activeClass="active"
                  to="benefit"
                  spy
                  smooth
                  offset={-70}
                  duration={500}
                >
                  Benefits
            </Scroll>
              </li>
              <li>
                <Scroll
                  activeClass="active"
                  to="company"
                  spy
                  smooth
                  offset={-70}
                  duration={500}
                >
                  Company
            </Scroll>
              </li>
            </ul>
            <Link to="https://nexidea.ai/contact" className="contact-us d-n d-lg-b">
              Login
            <img src={Icon} alt="icon" className="icon" />
            </Link>
          </nav>
          <div className="navicon d-b d-lg-n">
            <button type="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.75 24.75">
                <g>
                  <path d="M0,3.875c0-1.104,0.896-2,2-2h20.75c1.104,0,2,0.896,2,2s-0.896,2-2,2H2C0.896,5.875,0,4.979,0,3.875z M22.75,10.375H2
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
  </div>
);

export default Navbar;
