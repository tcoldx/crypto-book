export function convertNumber(num) {
  let string = num.toString();
  if (string.length > 12) {
    return (
      string.slice(0, string.length - 12) +
      "." +
      string.slice(string.length - 12, string.length - 10) +
      "T"
    );
  } else if (string.length > 9) {
    return (
      string.slice(0, string.length - 9) +
      "." +
      string.slice(string.length - 9, string.length - 7) +
      "B"
    );
  } else if (string.length > 6) {
    return (
      string.slice(0, string.length - 6) +
      "." +
      string.slice(string.length - 6, string.length - 4) +
      "M"
    );
  } else if (string.length > 5) {
    return (
      string.slice(0, string.length - 3) +
      "." +
      string.slice(string.length - 5, string.length - 3) +
      "K"
    );
  } else if (string.length > 3) {
    return (
      string.slice(0, string.length - 3) +
      "," +
      string.slice(string.length - 3, string.length - 1)
    );
  } else {
    return string;
  }
}
