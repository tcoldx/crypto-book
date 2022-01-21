export const formatPercent = (num) => {
  if (num === 0) {
    return "-";
  }
  if (num < 0) {
    return Math.abs(num).toFixed(2) + "%";
  }

  return Number(num).toFixed(2) + "%";
};
