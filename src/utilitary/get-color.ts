export const getColor = (voteAverage: number) => {
  if (voteAverage <= 3) {
    return '#E90000';
  }
  if (voteAverage <= 5) {
    return '#E97E00';
  }
  if (voteAverage <= 7) {
    return '#E9D100';
  }
  return '#66E900';
};
