import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Layout, PageHeader } from 'antd';

const { Header, Content, Footer } = Layout;

const ViewContainer = ({ children, view }) => {
  const navigate = useNavigate();
  const viewTitles = {
    "search": "Search",
    "my_saved_dogs": "My Saved Dogs"
  }

  return(
    <>
      <PageHeader
        className="site-page-header"
        title="Doggo Search"
        subTitle={viewTitles[view]}
        extra={
          Object.keys(viewTitles).map((key) => (
            <Button key={key} type={view === key && "primary"} onClick={() => navigate(`/${key}`)}>
              {viewTitles[key]}
            </Button>
          ))
        }
      />
      <Content style={{ margin: '16px 24px' }}>
        {children}
      </Content>
    </>
  )
}

export default ViewContainer;
