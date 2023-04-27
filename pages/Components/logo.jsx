import Head from "next/head";
import React, { useEffect } from "react";
import Swal from "sweetalert";

const Logo = () => {
  useEffect(() => {
    const form = document.getElementById("pfy_signup_form");
    form.addEventListener("submit", processForm);
    return () => form.removeEventListener("submit", processForm);
  }, []);

  function processForm(event) {
    event.preventDefault();
    const firstname = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    prefinery("addUser", { email: email, first_name: firstname }, () => {
      Swal({
        title: "Succesfully send!",
        text: "This is a message from SweetAlert",
        icon: "success",
        button: "OK",
      });
    });
  }

  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `prefinery = window.prefinery || function () { (window.prefinery.q = window.prefinery.q || []).push(arguments) };`,
          }}
        ></script>
        <script
          src="https://widget.prefinery.com/widget/v2/pvmpaw6y.js"
          defer
        ></script>
      </Head>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog fixed-top " id="model-box">
          <div className="modal-content">
            <div className="popup">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10">
                    <img src="logo.svg" alt="" />
                  </div>
                  <div className="col-lg-2" id="close-popup">
                    <p
                    //   className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      close
                    </p>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                </div>
                <div className="popcontant">
                  <h1>
                    Apply for Eary Access<span className="gradient"> !</span>
                  </h1>
                  <p>
                    Our product is currently undergoing fine-tuning and we would
                    greatly appreciate your assistance. Join our Beta program
                    and make a valuable contribution to the future of AI
                    Platforms.
                  </p>
                </div>

                <div className="popform">
                  <form
                    id="pfy_signup_form"
                    action="/test.html"
                    method="post"
                    novalidate
                  >
                    <div className="form-group">
                      <input
                        name="name"
                        id="name"
                        autoComplete="name"
                        required
                        type="text"
                        className="form-control"
                        // id="exampleInputtext"
                        aria-describedby="emailHelp"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        // id="exampleInputtext"
                        name="email"
                        id="email"
                        autoComplete="email"
                        aria-describedby="emailHelp"
                        placeholder="Email Address"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary"
                      id="btn-joinbeta"
                    >
                      Join Beta
                    </button>
                  </form>
                </div>
                <div className="formparagraph">
                  <p>
                    By signing up, you agree to our <u>Policy</u> and{" "}
                    <u>Terms of Service</u>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- <div className="popup">
          <div className="container">
            <div className="row">
              <div className="col-lg-10">
                <img src="logo.svg" alt="" />
              </div>
              <div className="col-lg-2" id="close-popup">
                
              </div>
            </div>
            <div className="popcontant">
              <h1>Apply for Eary Access<span className="gradient"> !</span></h1>
              <p>
                Our product is currently undergoing fine-tuning and we would greatly
                appreciate your assistance. Join our Beta program and make a
                valuable contribution to the future of AI Platforms.
              </p>
            </div>
            <div className="popform">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputtext"
                    aria-describedby="emailHelp"
                    placeholder="First Name"
                  />
                  
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputtext"
                    aria-describedby="emailHelp"
                    placeholder="Email Address"
                  />
                </div>
    
                <button type="submit" className="btn btn-primary" id="btn-joinbeta">Join Beta</button>
              </form>
              <p>By signing up, you agree to our <u>Policy</u> and <u>Terms of Service</u></p>
            </div>
          </div>
        </div> --> */}
      {/* <!-- <button onclick="topFunction()" id="nav_top" title="Go to top">Top</button> --> */}
      <button
        type="button"
        className="btn btn-floating btn-lg"
        id="btn-back-to-top"
      >
        <img src="arrow-up-solid.svg" alt="" width="15px" />
      </button>

      <div className="container">
        <div className="header">
          <h1>
            byc<span className="gradient">.</span>
          </h1>
        </div>
        <div className="main_context">
          <div className="row">
            <div className="col-lg-6 col-10">
              <h2>
                Your customers are <br />
                tired of <u>subscriptions!</u>
              </h2>
              <h1>
                Give Them a <span className="gradient">Choice.</span>
              </h1>
              <p>
                Boost Revenue and Expand Your Reach with Our
                <span className="italic_text">
                  Pay-
                  <br />
                  Per-Use Payment solution
                </span>
                for AI Tools & Startups!
              </p>
              <button
                className="gradient_button"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Request Early Access
              </button>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              {/* <!-- <div className="main_context_img_doted"> --> */}
              <div className="main_context_img_woman">
                {/* <!-- <div className="main_context_img_woman_text">
                      <p>hello</p>
                    </div> --> */}
              </div>
              {/* <!-- </div> --> */}
            </div>
          </div>
        </div>

        <div className="main_context_section2">
          <h2>How it Works?</h2>
          <div className="row" id="section2">
            <div className="col-lg-6" id="section_text">
              <div className="main_context_img_woman2">
                <div className="main_context_img_woman2_text">
                  <p className="section_number">1</p>
                </div>
                {/* <!-- <div className="main_context_img_woman2_form">
                    <form action="">
                      <input
                        type="text"
                        id="form_field"
                        name="firstname"
                        placeholder="Jessica@gmail.com"
                      />
    
                      <button className="btn_submit" type="submit" value="Submit">
                        Submit
                      </button>
                    </form>
                  </div> --> */}
              </div>
            </div>
            <div className="col-lg-6" id="section_text">
              <p className="section_text">
                Create your BYC account <br />& register your app
              </p>
            </div>
          </div>
        </div>

        <div className="main_context_section2">
          <div className="row" id="section2">
            <div className="col-lg-6 col-12" id="section_text_koibi">
              <div className="main_context_img_men">
                <div className="main_context_img_men_text">
                  <p className="section_number">2</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12" id="section_text">
              <p className="section_text">
                Use our JS integration or <br />
                API to accept Pay-Per-Use
                <br />
                payments
              </p>
            </div>
            <div className="col-lg-6" id="section_text_new">
              <div className="main_context_img_men">
                <div className="main_context_img_men_text">
                  <p className="section_number">2</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main_context_section2">
          <div className="row" id="section2">
            <div className="col-lg-6" id="section_text">
              <div className="main_context_img_men2">
                <div className="main_context_img_woman2_text">
                  <p className="section_number">3</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6" id="section_text">
              <p className="section_text">
                Users can now pay for <br />
                your service with their <br />
                pre-paid BYC credit
              </p>
            </div>
          </div>
        </div>

        <div className="row" id="bottom_section_row">
          <div className="col-lg-12">
            <div className="bottom">
              <p>
                By offering both Subscription and Pay Per Use options, your
                startup
                <br />
                can diversify its revenue streams, and reach more users with
                <br />
                different usage requirements.
              </p>
              <button className="gradient_button">Request Early Access</button>
            </div>
          </div>
        </div>

        <div className="row" id="footer_section">
          <div className="col-lg-7 col-12" id="footer_col1">
            <p>
              Stay Connected <u>@BYC_AI</u>
            </p>
            <img src="twiter.png" alt="twiter" />
          </div>
          <div className="col-lg-3 col-6" id="footer_col2">
            <p>©2023 All rights reserved</p>
          </div>
          <div className="col-lg-2 col-6" id="footer_col3">
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>

      {/* <script>
          let mybutton = document.getElementById("btn-back-to-top");
    
          // When the user scrolls down 20px from the top of the document, show the button
          window.onscroll = function () {
            scrollFunction();
          };
    
          function scrollFunction() {
            if (
              document.body.scrollTop > 20 ||
              document.documentElement.scrollTop > 20
            ) {
              mybutton.style.display = "block";
            } else {
              mybutton.style.display = "none";
            }
          }
          // When the user clicks on the button, scroll to the top of the document
          mybutton.addEventListener("click", backToTop);
    
          function backToTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          }
        </script> */}
    </>
  );
};

export default Logo;
