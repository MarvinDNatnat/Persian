
import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

import persianLogo from "../../image/persianLOGO.png"

export default function IndexNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  },[]);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };

  const clickHandler = (props) => () => {
    switch (props) {
      case 'home':
        document
          .getElementById("homepage-section")
          .scrollIntoView({ behavior: "smooth" });
        break;
      case 'feature':
        document
          .getElementById("feature-section")
          .scrollIntoView({ behavior: "smooth" });
        break;
      case 'roadmap':
        document
          .getElementById("roadmap-section")
          .scrollIntoView({ behavior: "smooth" });
        break;
      case 'howtoget':
        document
          .getElementById("how-to-get-section")
          .scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }

  }
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" tag={Link} id="navbar-brand">
            <h4>
              <img src={persianLogo} alt="PERSIAN" width="70" height="70" />
              &nbsp;&nbsp; $PERSIA
            </h4>
          </NavbarBrand>

          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                  $PERSIA
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>
            <NavItem className="p-0">
              <NavLink
                role="button"
                data-placement="bottom"
                rel="noopener noreferrer"
                onClick={clickHandler("home")}
              >
                <p className="d-lg d-xl">Home</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                role="button"
                data-placement="bottom"
                rel="noopener noreferrer"
                onClick={clickHandler("feature")}
              >
                <p className="d-lg d-xl">Feature</p>
              </NavLink>
            </NavItem>
            
            <NavItem className="p-0">
              <NavLink
                role="button"
                data-placement="bottom"
                rel="noopener noreferrer"
                onClick={clickHandler("roadmap")}
              >
                <p className="d-lg d-xl">Roadmap</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="#"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow us on Instagram"
                onClick={clickHandler("howtoget")}
              >
                <p className="d-lg d-xl">How To Buy</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <Button
                className="nav-link d-lg-block"
                color="success"
                target="_blank"
                href="https://drive.google.com/file/d/1H1UoCUERKzCJoei_heTlb8tXcIsQg1TV/view"
              >
                <i className="tim-icons icon-paper" />  WHITEPAPER
              </Button>
            </NavItem>
            <NavItem className="p-0">
              <Button
                className="nav-link d-lg-block"
                color="warning"
                target="_blank"
                href="https://pancakeswap.finance/swap?outputCurrency=0x999fae6a332b87a9a979ba32994dea6c4670ad55"
              >
                <i className="tim-icons icon-cart" />  BUY PERSIAN
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
