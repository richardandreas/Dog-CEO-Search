import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import { SearchContext } from "../../Contexts";
import { ViewContainer } from "../../Containers";
import Filter from "./Filter";
import SearchForm from "./SearchForm";
import Result from "./Result";
import useDogApi from "../../../hooks/useDogApi";
import truncateObject from "../../../utils/truncateObject";
import background from "../../../images/background.png";

const Search = () => {
  const [data, loading] = useDogApi("/breeds/list/all");
  const [searchParams, setSearchParams] = useState();

  const getURLSearchParams = () => {
    const params = new URLSearchParams(window.location.search);
    const breeds = params.get("breeds")?.split(",");
    const searchParams = {
      breeds: breeds?.[0] === "" ? null : breeds,
      breed: params.get("breed"),
      subbreed: params.get("subbreed"),
    };

    return truncateObject(searchParams);
  };

  useEffect(() => setSearchParams(getURLSearchParams()), []);

  return (
    <ViewContainer view="search">
      <SearchContext.Provider
        value={{ data, loading, searchParams, setSearchParams }}
      >
        <Col
          span={24}
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "contain",
          }}
        >
          <SearchForm />
        </Col>
        <Row style={{ width: "100%" }}>
          <Col>
            <Filter />
          </Col>
          <Col flex="auto">
            <Result />
          </Col>
        </Row>
      </SearchContext.Provider>
    </ViewContainer>
  );
};

export default Search;
