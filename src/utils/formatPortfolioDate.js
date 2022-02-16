export function portfolioDate(dateString) {
  const dateStringArray = dateString.split("-");
  return `${dateStringArray[2]}-${dateStringArray[1]}-${dateStringArray[0]}`;
}
