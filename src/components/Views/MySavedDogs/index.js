import React from "react";
import { ViewContainer } from "../../Containers";
import SavedDogs from "./SavedDogs";

const MySavedDogs = () => {
  return (
    <ViewContainer view="my_saved_dogs">
      <SavedDogs />
    </ViewContainer>
  );
};

export default MySavedDogs;
