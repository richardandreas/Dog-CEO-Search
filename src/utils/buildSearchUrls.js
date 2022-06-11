const buildSearchUrls = (searchParams) => {
  if (
    !searchParams?.["subbreed"] &&
    !searchParams?.["breed"] &&
    !searchParams?.["breeds"]
  )
    return ["/breeds/image/random/12"];

  if (searchParams?.["subbreed"])
    return [
      `/breed/${searchParams["breed"]}/${searchParams["subbreed"]}/images`,
    ];

  if (searchParams?.["breed"])
    return [`/breed/${searchParams["breed"]}/images`];

  if (searchParams?.["breeds"])
    return searchParams["breeds"].map((breed) => {
      return `/breed/${breed}/images`;
    });
};

export default buildSearchUrls;
