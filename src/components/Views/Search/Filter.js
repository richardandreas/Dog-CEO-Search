import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "antd";
import { SearchContext } from "../../Contexts";
import buildUrlParams from "../../../utils/buildUrlParams";
import forEachObject from "../../../utils/forEachObject";

const { Item, SubMenu } = Menu;

const Filter = () => {
  const navigate = useNavigate();
  const { data, searchParams, setSearchParams } = useContext(SearchContext);

  const onClick = ({ key }) => {
    const [breed, subbreed] = key === "all" ? [null, null] : key.split("--");
    const filterParams = {
      ...searchParams,
      breed,
      subbreed,
    };

    setSearchParams(filterParams);
    navigate({
      search: buildUrlParams(filterParams),
    });
  };

  const getSelectedKey = () => {
    if (!searchParams?.["breed"]) return "all";
    if (!searchParams?.["subbreed"]) return searchParams?.["breed"];

    return `${searchParams["breed"]}--${searchParams["subbreed"]}`;
  };

  if (!searchParams) return <></>;

  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={[getSelectedKey()]}
      defaultOpenKeys={[searchParams["breed"]]}
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
          if (value.length === 0) return <Item key={key}>{key}</Item>;

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
