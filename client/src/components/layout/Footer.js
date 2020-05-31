import React, { Fragment } from "react";
import "../../css/footer.css";

const Footer = () => {
  return (
    <Fragment>
      <div id='ClientFooter'>
        {" "}
        <footer class='footer-bs'>
          <div class='row'>
            <div class='col-md-3 footer-brand animated fadeInLeft'>
              <h2>AL-SAFAR</h2>
              <p>
                Suspendisse hendrerit tellus laoreet luctus pharetra. Aliquam
                porttitor vitae orci nec ultricies. Curabitur vehicula, libero
                eget faucibus faucibus, purus erat eleifend enim, porta
                pellentesque ex mi ut sem.
              </p>
              <p>© 2014 BS3 UI Kit, All rights reserved</p>
            </div>
            <div class='col-md-4 footer-nav animated fadeInUp'>
              <h4>Menu —</h4>
              <div class='row'>
                <div class='col-6'>
                  <ul class='pages'>
                    <li>
                      <a href='#'>Travel</a>
                    </li>
                    <li>
                      <a href='#'>Nature</a>
                    </li>
                    <li>
                      <a href='#'>Explores</a>
                    </li>
                    <li>
                      <a href='#'>Science</a>
                    </li>
                    <li>
                      <a href='#'>Advice</a>
                    </li>
                  </ul>
                </div>
                <div class='col-6'>
                  <ul class='list'>
                    <li>
                      <a href='#'>About Us</a>
                    </li>
                    <li>
                      <a href='#'>Contacts</a>
                    </li>
                    <li>
                      <a href='#'>Terms Condition</a>
                    </li>
                    <li>
                      <a href='#'>Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class='col-md-2 footer-social animated fadeInDown'>
              <h4>Follow Us</h4>
              <ul>
                <li>
                  <a href='#'>Facebook</a>
                </li>
                <li>
                  <a href='#'>Twitter</a>
                </li>
                <li>
                  <a href='#'>Instagram</a>
                </li>
                <li>
                  <a href='#'>RSS</a>
                </li>
              </ul>
            </div>
            <div class='col-md-3 footer-ns animated fadeInRight'>
              <h4>Newsletter</h4>
              <p>
                A rover wearing a fuzzy suit doesn’t alarm the real penguins
              </p>
              <p>
                <div class='row' style={{ padding: "0px" }}>
                  <div class='input-group'>
                    <input
                      type='text'
                      class='form-control'
                      placeholder='Enter Email'
                    />

                    <button
                      class='btn btn-primary ml-3 '
                      type='button'
                      style={{ margin: "-10px" }}
                    >
                      <i class='fa fa-envelope'></i>
                    </button>
                  </div>
                </div>
              </p>
            </div>
          </div>
        </footer>
        <div class='copyright text-center' style={{ marginTop: "0px" }}>
          Copyright &copy; 2020 <span>AL-SAFAR</span>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
