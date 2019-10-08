import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="col-md-3 col-sm-6">
              <h4>Address:</h4>
              <ul className="list-unstyled">
                <li>170 Hargrave Street</li>
                <li>Winnipeg,MB</li>
                <br />
                <li>Email US</li>
                <li>Vruttik.bhatt@gmail.com</li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="col-md-3 col-sm-6">
              <h4>New Posts</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="https://squareup.com/ca/en/townsquare/the-key-to-managing-and-scheduling-employees-tips-from-the-experts-2">The Key to Scheduling
Employees — Tips from the Experts</a>
                </li>
                <br />
                <li>
                  <a href="https://www.betterteam.com/employee-schedule-template">How to Create an Excel Employee Schedule Template</a>
                </li>
                
              </ul>
            </div>
            {/* Column 3 */}
            <div className="col-md-3 col-sm-6">
              <h4>Time Management Tools </h4>
              <ul className="list-unstyled">
                <li>
                  <a href="https://www.7shifts.com/blog/restaurant-management-tools/">The Cloud Advantage</a>
                </li>
                <br />
              </ul>
            </div>
            {/* Column 4 */}
            <div className="col-md-3 col-sm-6">
              <h4>Call For Demo</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="2046988920"> Ready for a call </a>
                </li>
                <br />
                <li>
                  <a href="vruttik.bhatt@gmail.com">Email US</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} IN & OUT App - All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}
export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
  }
  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }
  ul li a {
    color: var(--mainGrey);
  }
  ul li a:hover {
    color: var(--mainLightGrey);
  }
`;