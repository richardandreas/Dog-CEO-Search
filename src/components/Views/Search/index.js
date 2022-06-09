import React from "react";
import { Col } from "antd";
import Container from "../Container";
import SearchForm from "./SearchForm";

const Search = () => {
  return (
    <Container view="search">
      <Col xs={{ span: 24 }} lg={{ span: 12 }} style={{ margin: "80px 0" }}>
        <SearchForm />
      </Col>
    </Container>
  );
};

export default Search;
