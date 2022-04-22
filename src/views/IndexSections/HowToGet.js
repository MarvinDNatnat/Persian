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

import {
  Container,
  Row,
  Col,
} from "reactstrap";

const step1 = "The apps are secure and widely used in the DeFi Market. (Metamask suggested) Remember to never share your seed phrase!"
const step2 = "Purchase BNB or BSC (Binance Smart Chain) to fund your wallet. These coins are used in the Binance Smart Chain.";
const step3 = "Go to Safari or your browser of choice, and visit https://pancakeswap.finance/swap";
const step4 = "Pancakeswap is an exchange that allows users to swap BNB with other tokens. Click \"Select a currency\" & enter the contract address. for $PERSIA 0x999fae6a332b87a9a979ba32994dea6c4670ad55 (use slippage 7% to 9%) for $BERSIA 0xa4e95f11d1ae2faac3a90dcc1b53451e0c797eb0 (use slippage 14% to 18%)"

export default function HowToGet() {
  return (
    <div className="section section-how-to-get" id="how-to-get-section">
      <Container>
        <div className="title">
          <h3 className="mb-4">How To Buy</h3>
        </div>
        {/* <img src={pancakeswap} alt="PancakeSwap" className="img-fluid. max-width: 100% img-fluid rounded shadow" height="230px"  /> */}
        
        <Row>
          <Col className="col-6">
            <Row>
              <Col className="col-12">
                <p style={{ color: "red" }}>STEP 1</p>
                <span style={{ color: "white" }}>DOWNLOAD TRUSTWALLET OR METAMASK</span>
                <p>{step1}</p>
              </Col>
            </Row>
            <Row>
              <Col className="col-12">
                <p style={{ color: "red" }}>STEP 2</p>
                <span style={{ color: "white" }}>FUND YOUR WALLET</span>
                <p>{step2}</p>
              </Col>
            </Row>
            <Row>
              <Col className="col-12">
                <p style={{ color: "red" }}>STEP 3</p>
                <span style={{ color: "white" }}>DOWNLOAD TRUSTWALLET OR METAMASK</span>
                <p>{step3}</p>
              </Col>
            </Row>
            <Row>
              <Col className="col-12">
                <p style={{ color: "red" }}>STEP 4</p>
                <span style={{ color: "white" }}>DOWNLOAD TRUSTWALLET OR METAMASK</span>
                <p>{step4}</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
