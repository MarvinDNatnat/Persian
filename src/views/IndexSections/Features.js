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

import "assets/css/nucleo-icons.css";
import persian from "../../image/Persian.jpg"
import bersian from "../../image/persiaWhite.jpg"

import {
  Button,
  Row,
  Col,
} from "reactstrap";



export default function Features() {


  return (
    <div className="section section-feature" id="feature-section">
      <img
        alt="..."
        className="path"
        src={require("assets/img/path1.png").default}
      />
      <div className="container">
        <div className="row">
         <div className="col-sm justify-content-center"><img src={persian} alt="PERSIAN" className="img img-fluid. max-width: 100% height: auto" /></div>
          <div className="col-sm m-2">
            <Row><h2 style={{ color: "red" }}>Persian Neko Features</h2></Row>
            <Row><h1>FEATURES</h1></Row>
            <Row><h4><i className="tim-icons icon-check-2" style={{ color: "pink" }} />&nbsp; Total Supply: 1,000,000,000,000,000 $Persia</h4></Row>
            <Row><h4><i className="tim-icons icon-check-2" style={{ color: "pink" }} />&nbsp; 50% for Third-party management (locked)</h4></Row>
            <Row><h4><i className="tim-icons icon-check-2" style={{ color: "pink" }} />&nbsp; 30% for the Presale. We add 70% of token to LP on Pancakeswap</h4></Row>
            <Row><h4><i className="tim-icons icon-check-2" style={{ color: "pink" }} />&nbsp; 10% for buyback wallet</h4></Row>
            <Row><h4><i className="tim-icons icon-check-2" style={{ color: "pink" }} />&nbsp; 5% for airdrop & campaign</h4></Row>
            <Row><h4><i className="tim-icons icon-check-2" style={{ color: "pink" }} />&nbsp; 5% for marketing</h4></Row>
            <Row>
              <Col>
                <Button
                  className="btn-simple btn-round"
                  color="primary"
                  type="button"
                  target="_blank"
                  href="https://dxsale.app/app/v3/dxlplocksearch?id=0&add=0x999faE6A332B87a9a979ba32994dEA6c4670aD55&type=lpdefi&chain=BSC"
                >
                  Locked LP
                </Button>
              </Col>
              <Col>
                <Button
                  className="btn-simple btn-round"
                  color="primary"
                  type="button"
                  target="_blank"
                  href="https://poocoin.app/tokens/0x999fae6a332b87a9a979ba32994dea6c4670ad55"
                >
                  Livechart
                </Button>
              </Col>
              <Col>
                <Button
                  className="btn-simple btn-round"
                  color="primary"
                  target="_blank"
                  type="button"
                  href="https://bscscan.com/address/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c?a=0x8eea84e9Fb10Af1796ddA20E4BFf8cADb0761f5E#code"
                >
                  View Contract
                </Button>
              </Col>
            </Row>
          </div >
        </div >

        <pre></pre>
        <div className="container">
          <div className="row">
           <div className="col-sm"><center><img src={bersian} alt="BERSIAN" className="img-fluid rounded-circle shadow max-width: 100% height: auto" /></center></div>
            <div className="col-sm m-2">
              <Row><h2 style={{ color: "red" }}>Bersia Features</h2></Row>
              <Row><h1>FEATURES</h1></Row>
              <Row><h4><i className="tim-icons icon-check-2" style={{ color: "pink" }} />&nbsp; Total Supply: 5,000,000,000 $Bersia</h4></Row>
              {/* <Row><h4><i className="tim-icons icon-check-2" style={{ color: "pink" }} />&nbsp; 50% for Third-party management (locked)</h4></Row> */}
              {/* <Row><h4><i className="tim-icons icon-check-2" style={{ color: "pink" }} />&nbsp; 30% for the Presale. We add 70% of token to LP on Pancakeswap</h4></Row> */}
              {/* <Row><h4><i className="tim-icons icon-check-2" style={{ color: "pink" }} />&nbsp; 10% for buyback wallet</h4></Row> */}
              <Row>
                {/* <Col>
                  <Button
                    className="btn-simple btn-round"
                    color="primary"
                    type="button"
                    target="_blank"
                    href="https://dxsale.app/app/v3/dxlplocksearch?id=0&add=0x999faE6A332B87a9a979ba32994dEA6c4670aD55&type=lpdefi&chain=BSC"
                  >
                    Locked LP
                  </Button>
                </Col> */}
                <Col>
                  <Button
                    className="btn-simple btn-round"
                    color="primary"
                    type="button"
                    target="_blank"
                    href="https://poocoin.app/tokens/0xa4e95f11d1ae2faac3a90dcc1b53451e0c797eb0"
                  >
                    Livechart
                  </Button>
                </Col>
                <Col>
                  <Button
                    className="btn-simple btn-round"
                    color="primary"
                    target="_blank"
                    type="button"
                    href="https://bscscan.com/address/0xa4e95f11d1ae2faac3a90dcc1b53451e0c797eb0#code"
                  >
                    View Contract
                  </Button>
                </Col>
              </Row>
            </div >
          </div >
        </div >
      </div>
    </div >
  );
}
