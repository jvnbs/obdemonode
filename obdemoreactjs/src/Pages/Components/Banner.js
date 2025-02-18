import React from 'react'

const Banner = () => {
      return (
            <>
                  <div>
                        <div className="banner_bg">
                              <img src="assets/banner.png" alt />
                        </div>
                        <div className="container">
                              <div className="banner_content">
                                    <h2><b>Hire the Best</b>
                                          <span className="textUpdate" />
                                    </h2>
                                    <p>Work with the best It company talent from around the world. Our platform enables you
                                          to swiftly search and find the perfect service provider for your needs.</p>
                                    <form className="search_form">
                                          <div className="form-group" id="search-suggection">
                                                <input type="search" id="form1" className="form-control" placeholder="What are you looking for?" />
                                                <button type="button" className="btn">
                                                      <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M13.9036 12.8209L10.5842 9.50149C10.5214 9.4386 10.4393 9.40579 10.3518 9.40579H9.99092C10.8522 8.40779 11.3744 7.10903 11.3744 5.68722C11.3744 2.54558 8.82887 0 5.68722 0C2.54558 0 0 2.54558 0 5.68722C0 8.82887 2.54558 11.3744 5.68722 11.3744C7.10903 11.3744 8.40779 10.8522 9.40579 9.99092V10.3518C9.40579 10.4393 9.44134 10.5214 9.50149 10.5842L12.8209 13.9036C12.9494 14.0321 13.1572 14.0321 13.2857 13.9036L13.9036 13.2857C14.0321 13.1572 14.0321 12.9494 13.9036 12.8209ZM5.68722 10.062C3.27015 10.062 1.31244 8.10429 1.31244 5.68722C1.31244 3.27015 3.27015 1.31244 5.68722 1.31244C8.10429 1.31244 10.062 3.27015 10.062 5.68722C10.062 8.10429 8.10429 10.062 5.68722 10.062Z" fill="#3B5BE2" fillOpacity="0.8" />
                                                      </svg>
                                                </button>
                                          </div>
                                          <ul className="searchTags">
                                                <li><a href="#">Graphic Design</a></li>
                                                <li><a href="#">Logo Design</a></li>
                                                <li><a href="#">Wordpress</a></li>
                                                <li><a href="#">Drupal</a></li>
                                          </ul>
                                    </form>
                              </div>
                        </div>
                  </div>

            </>
      )
}

export default Banner