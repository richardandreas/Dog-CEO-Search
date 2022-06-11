import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Button, Form, Row, Select } from "antd";
import { ContentContainer } from "../../Containers";
import { SearchContext } from "../../Contexts";
import buildUrlParams from "../../../utils/buildUrlParams";
import forEachObject from "../../../utils/forEachObject";
import truncateObject from "../../../utils/truncateObject";

const { Option } = Select;
const { Item } = Form;

const SearchForm = () => {
  const { data, loading, setSearchParams } = useContext(SearchContext);
  const navigate = useNavigate();

  const onSearch = (searchParams) => {
    setSearchParams(searchParams);
    navigate({
      search: buildUrlParams(searchParams),
    });
  };

  const getURLSearchParams = () => {
    const searchParams = new URLSearchParams(window.location.search);

    return truncateObject({
      breeds: searchParams.get("breeds")?.split(","),
    });
  };

  return (
    <ContentContainer>
      <Row justify="center">
        <Col xs={{ span: 24 }} lg={{ span: 12 }} style={{ margin: "80px 0" }}>
          <Form
            name="search_form"
            layout="inline"
            onFinish={onSearch}
            initialValues={getURLSearchParams()}
          >
            <Row style={{ width: "100%" }}>
              <Col flex="auto">
                <Item name="breeds">
                  <Select
                    mode="multiple"
                    placeholder="Select breeds"
                    loading={loading}
                  >
                    {data &&
                      forEachObject(data, (key) => {
                        return (
                          <Option key={key} value={key} label={key}>
                            {key}
                          </Option>
                        );
                      })}
                  </Select>
                </Item>
              </Col>
              <Col>
                <Item style={{ width: "100%" }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ width: "100%" }}
                  >
                    Search
                  </Button>
                </Item>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </ContentContainer>
  );
};

export default SearchForm;
