import React, { useContext, useState } from "react";
import { Pagination, Row, Col } from "antd";
import { ContentContainer } from "../../Containers";
import { SearchContext } from "../../Contexts";
import { useDogMultiApi } from "../../../hooks/useDogApi";
import DogCard from "./DogCard";
import Spinner from "./../../Spinner";
import sortArray from "../../../utils/sortArray";

const Result = () => {
  const { searchParams } = useContext(SearchContext);
  const [page, setPage] = useState(1);
  const [data, loading] = useDogMultiApi(searchParams);

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

  const results = sortArray(data);
  const paginatedResults = results.slice(page * 12 - 12, page * 12);

  return (
    <ContentContainer>
      <p>{`${results.length} results found for ${searchTerm()}`}</p>
      <Col style={{ margin: "40px 0" }}>
        <Row justify="center">
          <Row className="result-grid" justify="center">
            <Row gutter={40} justify="evenly">
              {paginatedResults.map((url) => (
                <DogCard key={url} url={url} />
              ))}
            </Row>
          </Row>
        </Row>
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
