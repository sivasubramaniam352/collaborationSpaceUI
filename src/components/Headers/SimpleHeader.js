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
import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

const SimpleHeader = () => {
  return (
    <>
      <div className="header pb-3 pt-5 pt-md-8"
      style={{
          background:'#495464'
      }}
      >
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
           
          </div>
        </Container>
        
      </div>

      <Card
            style={{
                height:'70vh'
            }}
            
            >
            <Row>
              <Col lg="6" xl="3">
                
              </Col>
              <Col lg="6" xl="3">
                
              </Col>
              <Col lg="6" xl="3">
                
              </Col>
              <Col lg="6" xl="3">

              </Col>
            </Row>
            </Card>
    </>
  );
};

export default SimpleHeader;
