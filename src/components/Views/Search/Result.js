import React, { useContext } from "react";
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

  return (
    <ContentContainer>
      <p>Results for {searchTerm()}</p>
      {results.map((url) => (
        <DogCard key={url} url={url} />
      ))}
    </ContentContainer>
  );
};

export default Result;
