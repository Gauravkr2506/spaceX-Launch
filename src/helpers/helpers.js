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
