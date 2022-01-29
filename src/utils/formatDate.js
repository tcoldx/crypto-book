export function formatDate(dateString) {
  let date = new Date();
  if (dateString) {
    date = new Date(dateString);
  }

  const year = date.getFullYear();
  let day = date.getDate().toString();
  let month = (date.getMonth() + 1).toString();
  if (day.length === 1) {
    day = "0" + day;
  }
  if (month.length === 1) {
    month = "0" + month;
  }
  return `${month}-${day}-${year}`;
}
