const sortArray = (array) => {
  return array.sort((a, b) => {
    return a.localeCompare(b);
  });
};

export default sortArray;
