import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

export const ContentContainer = ({ children }) => {
  return <Content style={{ padding: "16px 24px" }}>{children}</Content>;
};
