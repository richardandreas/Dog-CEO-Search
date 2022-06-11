import React from "react";
import { ContentContainer } from "../../Containers";
import { Row } from "antd";
import doggoImage from "../../../images/doggo.jpg";

const SavedDogs = () => {
  return (
    <ContentContainer>
      <Row justify="center">
        <h2>Work in progress...</h2>
      </Row>
      <Row justify="center">
        <img src={doggoImage} alt="" width="600" style={{ maxWidth: "100%" }} />
      </Row>
    </ContentContainer>
  );
};

export default SavedDogs;
