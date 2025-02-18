import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
           <div className="navbar navbar-expand-lg">
  <div className="container">
    <Link to="/" className="logo_container">
      <img src="assets/itbizhubb-logo.png" />
    </Link>
    <button className="navbar-toggler" type="button">
      <span className="navbar-togglerIcon" />
      <span className="navbar-togglerIcon" />
      <span className="navbar-togglerIcon" />
    </button>
    <div className="collapse navbar-collapse" id="main-nav">
      <ul className="navbar-nav">
        <li className="nav-item sub-menu">
          <a className="nav-link" href="#">
            Find Services
          </a>
          <ul className="category-menu-list" id="service-category">
            <li className="category-menu">
              <button type="button" className="service-title">Software Development</button>
              <div className="mega-sub-menu">
                <ul>
                  <li><a href="#">Custom Software Developers</a></li>
                  <li><a href="#">Blockchain Development</a></li>
                  <li><a href="#">Java Development</a></li>
                  <li><a href="#">PHP Development</a></li>
                  <li><a href="#">Python Development</a></li>
                  <li><a href="#">React Development</a></li>
                  <li><a href="#">AngularJS Development</a></li>
                  <li><a href="#">NodeJS Development</a></li>
                  <li><a href="#">.Net Development</a></li>
                  <li><a href="#">Software Testing</a></li>
                </ul>
              </div>
            </li>
            <li className="category-menu">
              <button type="button" className="service-title">Web &amp; App Development</button>
              <div className="mega-sub-menu">
                <ul>
                  <li><a href="#">Mobile App Development</a></li>
                  <li><a href="#">Web Development</a></li>
                  <li><a href="#">E-Commerce Development</a></li>
                  <li><a href="#">Android App Development</a> </li>
                  <li><a href="#">iPhone App Development</a> </li>
                  <li><a href="#">Flutter App Development</a></li>
                  <li><a href="#">WordPress Development</a></li>
                  <li><a href="#">Magento Development</a></li>
                  <li><a href="#">Shopify Development</a></li>
                  <li><a href="#">WooCommerce Development</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="category-menu">
              <button type="button" className="service-title">Design</button>
              <div className="mega-sub-menu">
                <ul>
                  <li><a href="#">Web Design</a></li>
                  <li><a href="#">Graphic Design</a></li>
                  <li><a href="#">UX Design</a></li>
                  <li><a href="#">Product Design</a></li>
                  <li><a href="#">Logo Design</a></li>
                  <li><a href="#">Digital Design</a> </li>
                  <li><a href="#">Illustrators</a> </li>
                  <li><a href="#">Packaging Design</a></li>
                  <li><a href="#">Print Design</a></li>
                  <li><a href="#">Animation &amp; Multimedia</a></li>
                </ul>
              </div>
            </li>
            <li className="category-menu">
              <button type="button" className="service-title">Marketing &amp;
                Advertising</button>
              <div className="mega-sub-menu">
                <ul>
                  <li><a href="#">Digital Marketing</a></li>
                  <li><a href="#">SEO Agencies</a></li>
                  <li><a href="#">Advertising</a></li>
                  <li><a href="#">Social Media Marketing</a></li>
                  <li><a href="#">Content Marketing</a></li>
                  <li><a href="#">PPC Agencies</a></li>
                  <li><a href="#">Branding</a> </li>
                  <li><a href="#">Email Marketing</a></li>
                  <li><a href="#">Market Research</a></li>
                  <li><a href="#">Influencer Marketing</a></li>
                </ul>
              </div>
            </li>
            <li className="category-menu">
              <button type="button" className="service-title">Latest Tech</button>
              <div className="mega-sub-menu">
                <ul>
                  <li><a href="#">Artificial Intelligence</a></li>
                  <li><a href="#">AR &amp; VR Development</a></li>
                  <li><a href="#">IoT Development</a></li>
                  <li><a href="#">Bot Development</a></li>
                  <li><a href="#">DevOps</a></li>
                  <li><a href="#">Progressive Web App</a></li>
                  <li><a href="#">Robotic Process Automation</a></li>
                  <li><a href="#">ChatGPT Development</a></li>
                  <li><a href="#">Metaverse Development</a></li>
                </ul>
              </div>
            </li>
            <li className="category-menu">
              <button type="button" className="service-title">Business &amp; IT Services</button>
              <div className="mega-sub-menu">
                <ul>
                  <li><a href="#">IT Services</a></li>
                  <li><a href="#">Big Data Companies</a></li>
                  <li><a href="#">Implementation Services</a></li>
                  <li><a href="#">Cloud Computing Services</a></li>
                  <li><a href="#">Business Services</a></li>
                  <li><a href="#">IT Consulting</a></li>
                  <li><a href="#">BPO Services</a></li>
                  <li><a href="#">Admin Services</a></li>
                  <li><a href="#">Translation Services</a></li>
                  <li><a href="#">Supply Chain &amp; Logistics</a></li>
                </ul>
              </div>
            </li>
            <li className="menu-browse-all category-menu active-menu">
              <a href="listing.html" className="browse-all-menu-link">Browse all categories</a>
            </li>
          </ul>
        </li>
        <li className="nav-item sub-menu">
          <a className="nav-link" href="#">
            Find Software
          </a>
          <ul className="category-menu-list" id="software-category">
            <li className="category-menu"><a className="category-menu-title" href="#">Accounting
                Software</a></li>
            <li className="category-menu"><a className="category-menu-title" href="#">App Development
                Software</a></li>
            <li className="category-menu"><a className="category-menu-title" href="#">CRM Software</a></li>
            <li className="category-menu"><a className="category-menu-title" href="#">E-Commerce
                Software</a></li>
            <li className="category-menu"><a className="category-menu-title" href="#">ERP Software</a></li>
            <li className="category-menu"><a className="category-menu-title" href="#">HR Software</a></li>
            <li className="category-menu active-menu"><a className="category-menu-title" href="#">Help Desk
                Software</a>
            </li>
            <li className="category-menu"><a className="category-menu-title" href="#">Inventory Management
                Software</a></li>
            <li className="menu-browse-all category-menu"><a href="#" className="browse-all-menu-link">Browse all
                software</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">How it Works</a>
        </li>
      </ul>
    </div>
    <div className="right-buttons d-flex">
      <a href="sign-in.html" className="btn">Log In</a>
      <a href="get-listing.html" className="btn get_listing"> <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{background: 'transparent'}} width="20px" height="20px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
          <circle cx={50} cy={50} r="11.5807" fill="none" stroke="currentColor" strokeWidth={3}>
            <animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.5s" />
            <animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.5s" />
          </circle>
          <circle cx={50} cy={50} r="31.896" fill="none" stroke="currentColor" strokeWidth={3}>
            <animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.3 0.8 1" calcMode="spline" />
            <animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" />
          </circle>
        </svg>
        Get Listed</a>
    </div>
  </div>
</div>

        </>
    )
}

export default Header