import React, { useContext, useState } from "react";
import { Pagination, Row, Col } from "antd";
import { ContentContainer } from "../../Containers";
import { SearchContext } from "../../Contexts";
import { useDogApiMultiple } from "../../../hooks/useDogApi";
import DogCard from "./DogCard";
import Spinner from "./../../Spinner";
import forEachObject from "../../../utils/forEachObject";
import buildSearchUrls from "../../../utils/buildSearchUrls";
import sortArray from "../../../utils/sortArray";

const Result = () => {
  const { searchParams } = useContext(SearchContext);
  const [page, setPage] = useState(1);
  const [data, loading] = useDogApiMultiple(
    buildSearchUrls(searchParams),
    searchParams
  );

  const dataMerger = (data) => {
    let mergedArray = [];

    forEachObject(data, (_key, value) => {
      mergedArray = [...mergedArray, ...value];
    });

    return sortArray(mergedArray);
  };

  const searchTerm = () => {
    const searchTerm =
      searchParams?.["subbreed"] ||
      searchParams?.["breed"] ||
      searchParams?.["breeds"]?.join(", ");

    if (searchTerm) return searchTerm;

    return "random breeds";
  };

  if (loading)
    return (
      <ContentContainer>
        <Spinner />
      </ContentContainer>
    );

  const results = dataMerger(data);
  const paginatedResults = results.slice(page * 12 - 12, page * 12 - 1);

  return (
    <ContentContainer>
      <p>Results for {searchTerm()}</p>
      <Col style={{ margin: "40px 0" }}>
        {paginatedResults.map((url) => (
          <DogCard key={url} url={url} />
        ))}
      </Col>
      <Row justify="center">
        <Pagination
          defaultCurrent={page}
          pageSize={12}
          total={results.length}
          showSizeChanger={false}
          onChange={(page) => setPage(page)}
        />
      </Row>
    </ContentContainer>
  );
};

export default Result;
