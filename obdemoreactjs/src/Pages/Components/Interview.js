import React from 'react'

const Interview = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <div className="Recent-heading">
                            <h3>Recent<span>Interviews</span></h3>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="Recent-profile">
                            <div className="pro-file">
                                <img src="assets/profile-33.png" />
                                <h4>Umesh Bagri <span>Manager, Flexibits</span></h4>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                            <div className="Show_all">
                                <a href="#" className="btn">Full interview<svg width={9} height={8} viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.41557 4.59159C8.61083 4.39633 8.61083 4.07975 8.41557 3.88448L5.23358 0.702503C5.03832 0.507241 4.72174 0.507241 4.52648 0.702503C4.33122 0.897765 4.33122 1.21435 4.52648 1.40961L7.35491 4.23804L4.52648 7.06646C4.33122 7.26173 4.33122 7.57831 4.52648 7.77357C4.72174 7.96883 5.03832 7.96883 5.23358 7.77357L8.41557 4.59159ZM0.0620117 4.73804H8.06201V3.73804H0.0620117V4.73804Z" fill="currentColor" />
                                </svg></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Show_all view-more">
                    <a href="#" className="btn">View More Interviews <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 14C10.8669 14 14 10.8669 14 7C14 3.13306 10.8669 0 7 0C3.13307 0 0 3.13306 0 7C0 10.8669 3.13307 14 7 14ZM3.72581 5.75806H7V3.75686C7 3.45484 7.36694 3.30242 7.57863 3.51694L10.8048 6.76008C10.9375 6.89274 10.9375 7.10443 10.8048 7.2371L7.57863 10.4802C7.36411 10.6948 7 10.5423 7 10.2403V8.24193H3.72581C3.53952 8.24193 3.3871 8.08952 3.3871 7.90323V6.09677C3.3871 5.91048 3.53952 5.75806 3.72581 5.75806Z" fill="currentColor" />
                    </svg></a>
                </div>
            </div>

        </>
    )
}

export default Interview