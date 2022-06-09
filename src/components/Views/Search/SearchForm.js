import React from "react";
import { Col, Button, Form, Row, Select } from "antd";
import forEachObject from "../../../utils/forEachObject";
import { useNavigate } from "react-router-dom";
import useDogApi from "../../../hooks/useDogApi";

const { Option } = Select;
const { Item } = Form;

const SearchForm = () => {
  const [data, loading] = useDogApi("/breeds/list/all");
  const navigate = useNavigate();

  const onSearch = (params) => {
    navigate({
      search: `?${createSearchParams(params)}`,
    });
  };

  const createSearchParams = (params) => {
    return new URLSearchParams(params).toString();
  };

  const getInitialSearchValues = () => {
    const searchParams = new URLSearchParams(window.location.search);

    return {
      breeds: searchParams.get("breeds")?.split(","),
    };
  };

  return (
    <Form
      name="search_form"
      layout="inline"
      onFinish={onSearch}
      initialValues={getInitialSearchValues()}
    >
      <Row style={{ width: "100%" }}>
        <Col flex="auto">
          <Item
            name="breeds"
            rules={[
              {
                required: true,
                message: "Please select at least one breed",
                type: "array",
              },
            ]}
          >
            <Select
              mode="multiple"
              placeholder="Select breeds"
              loading={loading}
            >
              {data &&
                forEachObject(data, (key, value) => {
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
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Search
            </Button>
          </Item>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchForm;
