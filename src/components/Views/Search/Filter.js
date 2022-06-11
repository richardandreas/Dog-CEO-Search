import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "antd";
import { SearchContext } from "../../Contexts";
import buildUrlParams from "../../../utils/buildUrlParams";
import forEachObject from "../../../utils/forEachObject";
import truncateObject from "../../../utils/truncateObject";

const { Item, SubMenu } = Menu;

const Filter = () => {
  const { data, searchParams, setSearchParams } = useContext(SearchContext);
  const navigate = useNavigate();

  const onClick = ({ key }) => {
    const [breed, subbreed] = key.split("--");
    const filterParams = truncateObject({
      ...searchParams,
      breed,
      subbreed,
    });

    navigate({
      search: buildUrlParams(filterParams),
    });
  };

  const getURLFilterParams = () => {
    const filterParams = new URLSearchParams(window.location.search);

    return truncateObject({
      breed: filterParams.get("breed"),
      subbreed: filterParams.get("subbreed"),
    });
  };

  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={[
        `${getURLFilterParams()["breed"]}--${getURLFilterParams()["subbreed"]}`,
      ]}
      defaultOpenKeys={[getURLFilterParams()["breed"]]}
      mode="inline"
    >
      <Item key="all">all</Item>
      {data &&
        forEachObject(data, (key, value) => {
          if (
            searchParams?.["breeds"]?.length > 0 &&
            !searchParams?.["breeds"]?.includes(key)
          )
            return;
          if (value.length == 0) return <Item key={key}>{key}</Item>;

          return (
            <SubMenu key={key} title={key}>
              {value.map((subKey) => (
                <Item key={`${key}--${subKey}`} open>
                  {subKey}
                </Item>
              ))}
            </SubMenu>
          );
        })}
    </Menu>
  );
};

export default Filter;
