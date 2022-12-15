import truncateObject from "./truncateObject";

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

export default getURLSearchParams;
