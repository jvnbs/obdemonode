import React from 'react'

const Review = () => {
      return (
            <>
                  <div className="container">
                        <h2>Recent Reviews</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                              incididunt ut labore et dolore magna aliqua.</p>
                        <div className="row">
                              <div className="col-lg-4 col-md-6">
                                    <div className="review-box">
                                          <p>The client got exactly what they asked for: a functional
                                                and well-designed site with all the necessary features.
                                                Protocloud Technologies Pvt. Ltd. was very reliable and
                                                efficient — they address.</p>
                                          <h5>- Umesh Bagri , Manager, Flexibits</h5>
                                          <img src="assets/itbizhubb-logo.png" />
                                          <span>ItBizHub Technologies</span>
                                    </div>
                              </div>
                              <div className="col-lg-4 col-md-6">
                                    <div className="review-box">
                                          <p>The client got exactly what they asked for: a functional
                                                and well-designed site with all the necessary features.
                                                Protocloud Technologies Pvt. Ltd. was very reliable and
                                                efficient — they address.</p>
                                          <h5>- Umesh Bagri , Manager, Flexibits</h5>
                                          <img src="assets/newLogo3.png" />
                                          <span>Ptiwebtech Technologies</span>
                                    </div>
                              </div>
                              <div className="col-lg-4 col-md-6">
                                    <div className="review-box">
                                          <p>The client got exactly what they asked for: a functional
                                                and well-designed site with all the necessary features.
                                                Protocloud Technologies Pvt. Ltd. was very reliable and
                                                efficient — they address.</p>
                                          <h5>- Umesh Bagri , Manager, Flexibits</h5>
                                          <img src="assets/newLogo2.png" />
                                          <span>Trimurty Infotech</span>
                                    </div>
                              </div>
                            
                        </div>
                        <div className="Show_all">
                              <a href="#" className="btn">Browse all Reviews <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 14C10.8669 14 14 10.8669 14 7C14 3.13306 10.8669 0 7 0C3.13307 0 0 3.13306 0 7C0 10.8669 3.13307 14 7 14ZM3.72581 5.75806H7V3.75686C7 3.45484 7.36694 3.30242 7.57863 3.51694L10.8048 6.76008C10.9375 6.89274 10.9375 7.10443 10.8048 7.2371L7.57863 10.4802C7.36411 10.6948 7 10.5423 7 10.2403V8.24193H3.72581C3.53952 8.24193 3.3871 8.08952 3.3871 7.90323V6.09677C3.3871 5.91048 3.53952 5.75806 3.72581 5.75806Z" fill="currentColor" />
                              </svg></a>
                        </div>
                  </div>

            </>
      )
}

export default Review