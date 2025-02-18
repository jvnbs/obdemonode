import React from 'react'

const Service = () => {
      return (
            <>
                  <div className="container">
                        <div className="section_title">
                              <h2 className="h2_title">Browse Company by Services</h2>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.</p>
                              <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                          <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Find
                                                Services</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                          <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Find
                                                Software</button>
                                    </li>
                              </ul>
                        </div>
                        <div className="tab-content" id="myTabContent">
                              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                          <div className="col-lg-3 col-md-4 col-6">
                                                <a href="#" className="service_block">
                                                      <div className="s_icon">
                                                            <img src="assets/icon1.png" alt="icon" />
                                                      </div>
                                                      <h4>Web Development</h4>
                                                </a>
                                          </div>
                                          <div className="col-lg-3 col-md-4 col-6">
                                                <a href="#" className="service_block">
                                                      <div className="s_icon">
                                                            <img src="assets/icon2.png" alt="icon" />
                                                      </div>
                                                      <h4>Web Designing</h4>
                                                </a>
                                          </div>
                                          <div className="col-lg-3 col-md-4 col-6">
                                                <a href="#" className="service_block">
                                                      <div className="s_icon">
                                                            <img src="assets/icon3.png" alt="icon" />
                                                      </div>
                                                      <h4>Digital Marketing &amp;
                                                            Advertising</h4>
                                                </a>
                                          </div>
                                         
                                          <div className="col-lg-3 col-md-4 col-6">
                                                <a href="#" className="service_block">
                                                      <div className="s_icon">
                                                            <img src="assets/icon12.png" alt="icon" />
                                                      </div>
                                                      <h4>Admin Services</h4>
                                                </a>
                                          </div>
                                    </div>
                              </div>
                              <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="row">
                                          <div className="col-lg-3 col-md-4 col-6">
                                                <a href="#" className="service_block">
                                                      <div className="s_icon">
                                                            <img src="assets/icon13.png" alt="icon" />
                                                      </div>
                                                      <h4>Testing Software</h4>
                                                </a>
                                          </div>
                                          <div className="col-lg-3 col-md-4 col-6">
                                                <a href="#" className="service_block">
                                                      <div className="s_icon">
                                                            <img src="assets/icon14.png" alt="icon" />
                                                      </div>
                                                      <h4>Accounting Practice
                                                            Management Software</h4>
                                                </a>
                                          </div>
                                          <div className="col-lg-3 col-md-4 col-6">
                                                <a href="#" className="service_block">
                                                      <div className="s_icon">
                                                            <img src="assets/icon15.png" alt="icon" />
                                                      </div>
                                                      <h4>Accounting Software</h4>
                                                </a>
                                          </div>
                                          
                                          <div className="col-lg-3 col-md-4 col-6">
                                                <a href="#" className="service_block">
                                                      <div className="s_icon">
                                                            <img src="assets/icon24.png" alt="icon" />
                                                      </div>
                                                      <h4>Architecture Software</h4>
                                                </a>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div className="Show_all">
                              <a href="listing.html" className="btn">Browse all services <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 14C10.8669 14 14 10.8669 14 7C14 3.13306 10.8669 0 7 0C3.13307 0 0 3.13306 0 7C0 10.8669 3.13307 14 7 14ZM3.72581 5.75806H7V3.75686C7 3.45484 7.36694 3.30242 7.57863 3.51694L10.8048 6.76008C10.9375 6.89274 10.9375 7.10443 10.8048 7.2371L7.57863 10.4802C7.36411 10.6948 7 10.5423 7 10.2403V8.24193H3.72581C3.53952 8.24193 3.3871 8.08952 3.3871 7.90323V6.09677C3.3871 5.91048 3.53952 5.75806 3.72581 5.75806Z" fill="currentColor" />
                              </svg>
                              </a>
                        </div>
                  </div>

            </>
      )
}

export default Service