import React from "react";
import { Row, Space, Spin } from "antd";

const Spinner = () => {
  return (
    <Row justify="center" style={{ height: "220px" }}>
      <Space size="middle">
        <Spin size="large" />
      </Space>
    </Row>
  );
};

export default Spinner;
