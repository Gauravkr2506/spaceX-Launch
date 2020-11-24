export const getParamObj = (paramString) => {
  if (paramString === "") return {};
  let result = {};
  paramString
    .replace("?", "")
    .split("&")
    .forEach((str) => {
      let arr = str.split("=");
      result[arr[0]] = !!arr[1] ? arr[1] : null;
    });

  return result;
};

export const throttle = (fn, delay = 500) => {
  let last = 0;
  return (...args) => {
    debugger;
    const now = new Date().getTime();
    if (now - last < delay) {
      return fn(...args);
    }
    last = now;
  };
};
