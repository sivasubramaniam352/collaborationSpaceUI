/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";
import "./sidebarStyle.css";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import CCModal from "components/Modals/CCModal";

const Sidebar = (props) => {
  const [collapseOpen, setCollapseOpen] = useState();
  // const [currentChannels, setcurrentChannels] = useState([]);
  const [Ws, setWs] = useState({});
  const user = useSelector((state) => state.user);
  const currentCh = useSelector((state) => state.currentCh);
  const currentWs = useSelector((state) => state.currentWs);
  const usertable = useSelector((state) => state.usertableOpen);

  const dispatch = useDispatch();

  const [ccModal, setCcModal] = useState(false);
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  // toggles collapse between opened and closed (true/false)
  const toggleCollapse = () => {
    setCollapseOpen((data) => !data);
  };
  // closes the collapse
  const setChannels = (ws) => {
    setWs(ws);
  };

  // creates the links that appear in the left menu / Sidebar
  const createLinks = (routes) => {
    // let userWorkSpaces = _.concat(user.created_workspaces, user.admitted_workspaces);
    // console.log(userWorkSpaces, "WDS");
    return (
      user.created_workspaces &&
      [...user.created_workspaces, ...user.admitted_workspaces].map(
        (prop, key) => {
          console.log(prop, "DATA");
          let name =
            prop.workSpace.name[0] +
            prop.workSpace.name[prop.workSpace.name.length - 1];
          return (
            <NavItem key={key}>
              <NavLink
                to={
                  "/ws" +
                  prop.workSpace._id +
                  "/" +
                  prop.workSpace.channels[0].channelId
                }
                tag={NavLinkRRD}
                onClick={() => setChannels(prop)}
                activeClassName="active"
                style={{ paddingTop: "0px" }}
              >
                <Card className={"wsNameLinks_Container"}>{name}</Card>
              </NavLink>
            </NavItem>
          );
        }
      )
    );
  };

  const { bgColor, routes, logo } = props;
  let navbarBrandProps;
  if (logo && logo.innerLink) {
    navbarBrandProps = {
      to: logo.innerLink,
      tag: Link,
    };
  } else if (logo && logo.outterLink) {
    navbarBrandProps = {
      href: logo.outterLink,
      target: "_blank",
    };
  }

  const createChannels = () => {
    console.log(user, "WSWSW");
    let data =
      Object.keys(Ws).length > 0
        ? Ws.workSpace.channels
        : user.created_workspaces[0].workSpace.channels;
    console.log(data, "DATA");
    return data.map((d, i) => {
      return (
        <Card
          className={"channelLinks"}
          style={{
            width: "100%",
          }}
        >
          <i class="fab fa-slack-hash"></i> {d.channelId.name}
        </Card>
      );
    });
  };

  return (
    <Navbar
      className="navbar-vertical fixed-left navbar-light"
      expand="md"
      id="sidenav-main"
      style={{ background: "#e8e8e8", padding: "0px" }}
    >
      <Container fluid>
        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleCollapse}
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Brand */}
        {logo ? (
          <NavbarBrand className="pt-0" {...navbarBrandProps}>
            <img
              alt={logo.imgAlt}
              className="navbar-brand-img"
              src={logo.imgSrc}
            />
          </NavbarBrand>
        ) : null}
        {/* User */}
        <Nav className="align-items-center d-md-none">
          <UncontrolledDropdown nav>
            <DropdownToggle nav className="nav-link-icon">
              <i className="ni ni-bell-55" />
            </DropdownToggle>
            <DropdownMenu
              aria-labelledby="navbar-default_dropdown_1"
              className="dropdown-menu-arrow"
              right
            >
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav>
            <DropdownToggle nav>
              <Media className="align-items-center">
                <span className="avatar avatar-sm rounded-circle">
                  <img alt="..." src={user.picture} />
                </span>
              </Media>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-arrow" right>
              <DropdownItem className="noti-title" header tag="div">
                <h6 className="text-overflow m-0">Welcome!</h6>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile" tag={Link}>
                <i className="ni ni-single-02" />
                <span>My profile</span>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile" tag={Link}>
                <i className="ni ni-settings-gear-65" />
                <span>Settings</span>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile" tag={Link}>
                <i className="ni ni-calendar-grid-58" />
                <span>Activity</span>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile" tag={Link}>
                <i className="ni ni-support-16" />
                <span>Support</span>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                <i className="ni ni-user-run" />
                <span>Logout</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        {/* Collapse */}
        <Collapse navbar isOpen={collapseOpen}>
          {/* Collapse header */}
          <div className="navbar-collapse-header d-md-none">
            <Row>
              {logo ? (
                <Col className="collapse-brand" xs="6">
                  {logo.innerLink ? (
                    <Link to={logo.innerLink}>
                      <img alt={logo.imgAlt} src={logo.imgSrc} />
                    </Link>
                  ) : (
                    <a href={logo.outterLink}>
                      <img alt={logo.imgAlt} src={logo.imgSrc} />
                    </a>
                  )}
                </Col>
              ) : null}
              <Col className="collapse-close" xs="6">
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={toggleCollapse}
                >
                  <span />
                  <span />
                </button>
              </Col>
            </Row>
          </div>
          {/* Form */}
          <Form className="mt-4 mb-3 d-md-none">
            <InputGroup className="input-group-rounded input-group-merge">
              <Input
                aria-label="Search"
                className="form-control-rounded form-control-prepended"
                placeholder="Search"
                type="search"
              />
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <span className="fa fa-search" />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Form>
          {/* Navigation */}
          {/* <h6 className="navbar-heading text-muted">Documentation</h6> */}
          <div className={"flex"} style={{}}>
            <div
              style={{
                borderRight: "1px solid blueviolet",
                padding: "0px 10px",
              }}
            >
              <Nav
                style={{
                  paddingTop: "0px",
                }}
                navbar
              >
                {createLinks()}
              </Nav>
            </div>
            <div
              className={"flex flexCol"}
              style={{
                width: "100%",
                alignItems: "center",
              }}
            >
              <Nav
                style={{
                  width: "90%",
                }}
                navbar
              >
                {createChannels()}
              </Nav>
              <div
                className={"pointer createChannelCont"}
                onClick={() => {
                  console.log("FSASAD");
                  setCcModal(true);
                }}
              >
                <span>+ Add Channel</span>
              </div>

              <div
                className={"pointer createChannelCont"}
                onClick={() => {
                  console.log("FSASAD");
                  dispatch({ type: "userTable", usertableOpen: !usertable });
                }}
              >
                <span>Manage taem</span>
              </div>
            </div>
          </div>
          {/* Divider */}
          <hr className="my-3" />
          {/* Heading */}
          {/* <h6 className="navbar-heading text-muted">Documentation</h6> */}
          {/* Navigation */}
          {/* <Nav className="mb-md-3" navbar>
            <NavItem>
              <NavLink href="https://demos.creative-tim.com/argon-dashboard-react/#/documentation/overview?ref=adr-admin-sidebar">
                <i className="ni ni-spaceship" />
                Getting started
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://demos.creative-tim.com/argon-dashboard-react/#/documentation/colors?ref=adr-admin-sidebar">
                <i className="ni ni-palette" />
                Foundation
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://demos.creative-tim.com/argon-dashboard-react/#/documentation/alerts?ref=adr-admin-sidebar">
                <i className="ni ni-ui-04" />
                Components
              </NavLink>
            </NavItem>
          </Nav> */}
        </Collapse>
      </Container>
      <CCModal visibility={ccModal} exitFun={() => setCcModal(false)} />
    </Navbar>
  );
};

Sidebar.defaultProps = {
  routes: [{}],
};

Sidebar.propTypes = {
  // links that will be displayed inside the component
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link to="...">...</Link> tag
    innerLink: PropTypes.string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: PropTypes.string,
    // the image src of the logo
    imgSrc: PropTypes.string.isRequired,
    // the alt for the img
    imgAlt: PropTypes.string.isRequired,
  }),
};

export default Sidebar;
