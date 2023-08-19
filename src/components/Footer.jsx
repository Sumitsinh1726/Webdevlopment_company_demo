import React from "react";

const Footer = () => {
  return (
    <div>
      <div class="my-5 mb-0">
        <footer
          class="text-center text-lg-start text-white"
          style={{background:"#1c2331"}}
        >
          <section
            class="d-flex justify-content-between p-2"
            style={{background:"#6351ce"}}
          > 
          </section>

          <section class="">
            <div class="container text-center text-md-start mt-5">
              <div class="row mt-3">
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 class="fw-bold">Corestring</h6>
                  <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    style={{width: "60px", backgroundcolor:"#7c4dff", height:"2px"}}
                  />
                  <p className="fs-3">Converting your Ideas into Reality
                  </p>
                </div>

                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold">Quick Links</h6>
                  <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    style={{width: "60px", backgroundcolor:"#7c4dff", height:"2px"}}
                  />
                  <p>
                    <a href="#!" class="text-white text-decoration-none">
                      About us 
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-white text-decoration-none">
                    Services
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-white text-decoration-none">
                    Our Portfolio
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-white text-decoration-none">
                        Careers
                    </a>
                  </p>
                </div>

                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold">Services</h6>
                  <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    style={{width: "60px", backgroundcolor:"#7c4dff", height:"2px"}}
                  />
                  <p>
                    <a href="#!" class="text-white text-decoration-none">
                      React 
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-white text-decoration-none">
                      React Native
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-white text-decoration-none">
                      Angular
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-white text-decoration-none">
                      Wordpress
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-white text-decoration-none">
                      PHP
                    </a>
                  </p>
                </div>

                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 class="text-uppercase fw-bold">Get in touch</h6>
                  <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    style={{width:"60px", backgroundcolor:"#7c4dff", height: "2px"}}
                  />
                  <p>
                    <i class="fas fa-home mr-3"></i> Ahemdabad
                  </p>
                  <p>
                    <i class="fas fa-envelope mr-3"></i> Corestring2023@gmail.com.com
                  </p>
                  <p>
                    <i class="fas fa-phone mr-3"></i> +91 912345678
                  </p>
                  {/* <p>
                    <i class="fas fa-print mr-3"></i> + 01 234 567 89
                  </p> */}
                </div>
              </div>
            </div>
          </section>

          <div
            class="text-center p-3"
            style={{backgroundcolor:"rgba(0, 0, 0, 0.2)"}}
          >
            © Corestring.com
            <a class="text-white" href="https://mdbootstrap.com/">
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
