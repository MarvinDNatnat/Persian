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

import classnames from "classnames";
import {
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
export default function Roadmap() {
  const [iconTabs, setIconsTabs] = React.useState(1);
  return (
    <div className="section section-roadmap" id="roadmap-section" >
      <Container>
        <div className="title">
          <h3 className="mb-4">Roadmap</h3>
        </div>
        <Row>
          <Col className="ml-auto mr-auto" md="8" xl="8">
            <div className="mb-3">
              <small className="text-uppercase font-weight-bold">
                Steps Toward $SHIB
              </small>
            </div>
            <Card>
              <CardHeader>
                <Nav className="nav-tabs-info justify-content-center" role="tablist" tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: iconTabs === 1,
                      })}
                      onClick={(e) => setIconsTabs(1)}
                      href="#pablo"
                    >
                      PHASE 1
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: iconTabs === 2,
                      })}
                      onClick={(e) => setIconsTabs(2)}
                      href="#pablo"
                    >
                      PHASE 2
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: iconTabs === 3,
                      })}
                      onClick={(e) => setIconsTabs(3)}
                      href="#pablo"
                    >
                      PHASE 3
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: iconTabs === 4,
                      })}
                      onClick={(e) => setIconsTabs(4)}
                      href="#pablo"
                    >
                      MORE PHASE
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>
              <CardBody>
                <TabContent className="tab-space" activeTab={"link" + iconTabs}>
                  <TabPane tabId="link1">
                    <h3>BIRTH OF NEW MEME</h3>
                    <h4 >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <i className="tim-icons icon-check-2" style={{ color: "skyblue" }} />
                      &nbsp;
                      AirDrop </h4>
                    <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <i className="tim-icons icon-check-2" style={{ color: "skyblue" }} />
                      &nbsp;
                      1k Twitter Followers </h4>
                    <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="tim-icons icon-check-2" style={{color: "skyblue"}}  /> 
                      &nbsp;
                      1k Telegram Members </h4>
                    <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="tim-icons icon-check-2" style={{color: "skyblue"}}  /> 
                      &nbsp;
                      Website Publication  </h4>
                    <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="tim-icons icon-check-2" style={{color: "skyblue"}}  /> 
                      &nbsp;
                      $PERSIA Smart Contract </h4>
                    <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="tim-icons icon-check-2" style={{color: "skyblue"}}  /> 
                      &nbsp;
                      Marketing - $PERSIA  </h4>
                    <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="tim-icons icon-check-2" style={{color: "skyblue"}}  /> 
                      &nbsp;
                      Pancakeswap Listing - $PERSIA  </h4>
                  </TabPane>
                  <TabPane tabId="link2">
                    <h3>BREAKTHROUGH AS MEME</h3>
                    <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="tim-icons icon-check-2" style={{color: "skyblue"}}  /> 
                      &nbsp;
                      $PERSIA 1k Holders </h4>
                    <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="tim-icons icon-check-2" style={{color: "skyblue"}}  /> 
                      &nbsp;
                      2k Twitter Followers </h4>
                    <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="tim-icons icon-check-2" style={{color: "skyblue"}}  /> 
                      &nbsp;
                      2k Telegram Members </h4>
                    <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="tim-icons icon-check-2" style={{color: "skyblue"}}  /> 
                      &nbsp;
                      $BABYPERSIA Smart Contract    </h4>
                    <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="tim-icons icon-check-2" style={{color: "skyblue"}}  /> 
                      &nbsp;
                      Presale - $BABYPERSIA </h4>
                    <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="tim-icons icon-check-2" style={{color: "skyblue"}}  /> 
                      &nbsp;
                      MAggressive Marketing - $PERSIA & $BABYPERSIA    </h4>
                    <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="tim-icons icon-check-2" style={{color: "skyblue"}}  /> 
                      &nbsp;
                      Pancakeswap Listing - $BABYPERSIA </h4>
                    <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="tim-icons icon-simple-remove" style={{color: "red"}}  /> 
                      &nbsp;
                      Coingecko listing - $PERSIA & $BABYPERSIA  </h4>
                    <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="tim-icons icon-simple-remove" style={{color: "red"}}  /> 
                      &nbsp;
                      Coinmarketcap listing - $PERSIA & $BABYPERSIA </h4>
                    <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="tim-icons icon-simple-remove" style={{color: "red"}}  /> 
                      &nbsp;
                      PersianSwap DeFi Platform Beta Launch </h4>
                    <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="tim-icons icon-simple-remove" style={{color: "red"}}  /> 
                      &nbsp;
                      PersianSwap Social Platform Beta release </h4>
                  </TabPane>
                  <TabPane tabId="link3">
                    <h3>CHALLENGE TO $SHIB</h3>
                    <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="tim-icons icon-simple-remove" style={{color: "skyblue"}}  /> 
                      &nbsp;
                      $PERSIA & $BABYPERSIA 2k Holders </h4>
                    <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="tim-icons icon-simple-remove" style={{color: "red"}}  /> 
                      &nbsp;
                      $EPERSIA Smart Contract </h4>
                    <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="tim-icons icon-simple-remove" style={{color: "red"}}  /> 
                      &nbsp;
                      Uni-swap Listing - $EPERSIA </h4>
                    <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="tim-icons icon-simple-remove" style={{color: "red"}}  /> 
                      &nbsp;
                      Coingecko listing - $EPERSIA   </h4>
                    <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="tim-icons icon-simple-remove" style={{color: "red"}}  /> 
                      &nbsp;
                      Coinmarketcap listing - $EPERSIA  </h4>
                    <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="tim-icons icon-simple-remove" style={{color: "red"}}  /> 
                      &nbsp;
                      Aggressive Marketing - Our all tokens </h4>
                  </TabPane>
                  <TabPane tabId="link4">
                    <h3>REACHING THE $SHIB</h3>
                    <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="tim-icons icon-simple-remove" style={{color: "red"}}  /> 
                      &nbsp;
                      PersianSwap Full OPEN </h4>
                    <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="tim-icons icon-simple-remove" style={{color: "red"}}  /> 
                      &nbsp;
                      Saving all the cats in the world from suffering </h4>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
