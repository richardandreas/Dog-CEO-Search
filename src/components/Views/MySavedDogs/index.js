import React from "react";
import { Col, Row } from "antd";
import Container from "../Container";
import doggoImage from "../../../images/doggo.jpg";

const MySavedDogs = () => {
  return (
    <Container view="my_saved_dogs">
      <Col>
        <Row justify="center">
          <h2>Work in progress...</h2>
        </Row>
        <img src={doggoImage} alt="" width="600" style={{ maxWidth: "100%" }} />
      </Col>
    </Container>
  );
};

export default MySavedDogs;
