import React, { useEffect, useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";
import SimpleHeader from "components/Headers/SimpleHeader";
import { CONFIG } from "Global/GlobalCreds";
import { getUser } from "services/ApiServices";
import { useDispatch, useSelector } from "react-redux";
import Tables from "views/examples/Tables";
import UserTable from "./UserTable";
import Collab from "components/CollabContainer/Collab";
import InviteModal from "components/Modals/InviteModal";
import CCModal from "components/Modals/CCModal";

const Main = (props) => {
  const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const CModal = useSelector(state => state.CCModal);
    const INModal = useSelector(state => state.INVITEModal);


  const [activeNav, setActiveNav] = useState(1);
  // const [usertable, setusertable] = useState(false);
  const usertable = useSelector(state => state.usertableOpen);
  
  const [chartExample1Data, setChartExample1Data] = useState("data1");
  console.log(user, "user");
  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };


  return (
  
    <>
      <SimpleHeader />
      {/* Page content */}
      <Container className="proxima mt--7"
      style={{
        paddingTop:'10'
      }}
      fluid>
        <Row>
        <div 
       style={{
         width:'100%',
         height:500,
         marginTop:'150px'
       }}
       >
        {usertable &&
        <div
        style={{
          position:'absolute'
        }}
        >
        <UserTable 
        
        />
        </div>
         } 
        
<Collab />
       </div>
        </Row>
      </Container>
          {CModal &&
          <CCModal
          visibility
          exitFun={() => dispatch({type:'CCModal', CCModal:false})}
          />
          }
          {INModal &&
          <InviteModal 
          visibility 
          exitFun={() => dispatch({type:'INVITEModal', INVITEModal:false})}
          />
          }
    </>
  );
};

export default Main;
