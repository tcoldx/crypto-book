const convertDateUnix = () => {
  if ("1d") {
    return 86400;
  }
  if ("1w") {
    return 604800;
  }
  if ("1m") {
    return 2629743;
  }
  if ("3m") {
    return 7776000;
  }

  if ("6m") {
    return 15552000;
  }
  if ("1y") {
    return 31536000;
  }
  return 86400;
};
