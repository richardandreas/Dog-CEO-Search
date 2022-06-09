import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Layout, PageHeader, Row } from "antd";
import forEachObject from "../../utils/forEachObject";

const { Content } = Layout;

const ViewContainer = ({ children, view }) => {
  const navigate = useNavigate();
  const viewTitles = {
    search: "Search",
    my_saved_dogs: "My Saved Dogs",
  };

  return (
    <>
      <PageHeader
        className="site-page-header"
        title="Doggo Search"
        subTitle={viewTitles[view]}
        extra={forEachObject(viewTitles, (key, value) => (
          <Button
            key={key}
            type={view === key && "primary"}
            onClick={() => navigate(`/${key}`)}
          >
            {value}
          </Button>
        ))}
      />
      <Content style={{ margin: "16px 24px" }}>
        <Row justify="center">{children}</Row>
      </Content>
    </>
  );
};

export default ViewContainer;
