import React from 'react'

const QuickConnect = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <h3>Quick<span>Connect</span></h3>
                        <ul className="nav nav-tabs" id="quickTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="Software-tab" data-bs-toggle="tab" data-bs-target="#Software" type="button" role="tab" aria-controls="Software" aria-selected="true">Best Software
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="Services-tab" data-bs-toggle="tab" data-bs-target="#Services" type="button" role="tab" aria-controls="Services" aria-selected="false">Top IT
                                    Services</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="Trading-tab" data-bs-toggle="tab" data-bs-target="#Trading" type="button" role="tab" aria-controls="Trading" aria-selected="false">Trading
                                    Skills</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="Locations-tab" data-bs-toggle="tab" data-bs-target="#Locations" type="button" role="tab" aria-controls="Locations" aria-selected="false">Search By
                                    Locations</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="Industries-tab" data-bs-toggle="tab" data-bs-target="#Industries" type="button" role="tab" aria-controls="Industries" aria-selected="false">Filter by
                                    Industries</button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-7">
                        <div className="tab-content" id="quickTabContent">
                            <div className="tab-pane fade show active" id="Software" role="tabpanel" aria-labelledby="Software-tab">
                                <ul className="result_list">
                                    <li><a href="#">Data Entry Specialists</a></li>
                                    <li><a href="#">JavaScript Developer</a></li>
                                    <li><a href="#">WordPress Developer</a></li>
                                  
                                    <li><a href="#">iOS Developer</a></li>
                                    <li><a href="#">Virtual Assistant</a></li>
                                    <li><a href="#">Java Developer</a></li>
                                    <li><a href="#">Web Designer</a></li>
                                </ul>
                            </div>
                            <div className="tab-pane fade" id="Services" role="tabpanel" aria-labelledby="Services-tab">
                                <ul className="result_list">
                                    <li><a href="#">Data Entry Specialists</a></li>
                                    <li><a href="#">JavaScript Developer</a></li>
                                    <li><a href="#">WordPress Developer</a></li>
                                    <li><a href="#">Logo Designer</a></li>
                                 
                                    <li><a href="#">Java Developer</a></li>
                                    <li><a href="#">Web Designer</a></li>
                                </ul>
                            </div>
                            <div className="tab-pane fade" id="Trading" role="tabpanel" aria-labelledby="Trading-tab">
                                <ul className="result_list">
                                    <li><a href="#">Data Entry Specialists</a></li>
                                    <li><a href="#">JavaScript Developer</a></li>
                                    <li><a href="#">WordPress Developer</a></li>
                                 
                                    <li><a href="#">Graphic Designer</a></li>
                                    <li><a href="#">UX Designer</a></li>
                                    <li><a href="#">iOS Developer</a></li>
                                    <li><a href="#">Virtual Assistant</a></li>
                                    <li><a href="#">Java Developer</a></li>
                                    <li><a href="#">Web Designer</a></li>
                                </ul>
                            </div>
                            <div className="tab-pane fade" id="Locations" role="tabpanel" aria-labelledby="Locations-tab">
                                <ul className="result_list">
                                    <li><a href="#">Data Entry Specialists</a></li>
                                    <li><a href="#">JavaScript Developer</a></li>
                                    <li><a href="#">WordPress Developer</a></li>
                                    <li><a href="#">Logo Designer</a></li>
                                   
                                    <li><a href="#">iOS Developer</a></li>
                                    <li><a href="#">Virtual Assistant</a></li>
                                    <li><a href="#">Java Developer</a></li>
                                    <li><a href="#">Web Designer</a></li>
                                </ul>
                            </div>
                            <div className="tab-pane fade" id="Industries" role="tabpanel" aria-labelledby="Industries-tab">
                                <ul className="result_list">
                                    <li><a href="#">Data Entry Specialists</a></li>
                                    <li><a href="#">JavaScript Developer</a></li>
                                    <li><a href="#">WordPress Developer</a></li>
                                    <li><a href="#">Logo Designer</a></li>
                                    <li><a href="#">Drupal Developer</a></li>
                                    <li><a href="#">Mobile App Developer</a></li>
                                    <li><a href="#">Shopify Developer</a></li>
                                    <li><a href="#">PHP Developer</a></li>
                                
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default QuickConnect