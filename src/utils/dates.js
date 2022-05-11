export const formatTotalTime = (val) => {
  return (
    parseInt(val / 60000) +
    ":" +
    parseInt(val % 60000)
      .toString()
      .substring(0, 2)
  );
};
