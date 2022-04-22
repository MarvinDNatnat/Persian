/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import persianLogo from "../../image/persianLOGO.png"
import {
  Button,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="3">
          <h3><img src={persianLogo} alt="PERSIAN" width="30%" height="100%" /> Persian Neko</h3>
          </Col>
          <Col md="3" className="text-center" ></Col>
          <Col md="6" className="text-center" >
          <div className="btn-wrapper profile">
         
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://twitter.com/persia_token"
                id="tooltip622135962"
                target="_blank"
              >
                <i className="fab fa-twitter" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip622135962">
                Follow us
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://t.me/PERSIANNEKO"
                id="tooltip230450801"
                target="_blank"
              >
                <i className="fab fa-telegram" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip230450801">
                Join us
              </UncontrolledTooltip>
              <p>© 2021 Persian. Made With Love By Persian</p>
            </div>
          </Col>
          <Col>
         </Col>
        </Row>
      </Container>
    </footer>
  );
}
