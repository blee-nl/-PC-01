const sortStringArray = (stringArray) =>
  stringArray.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) return -1;
    else if (a.toLowerCase() > b.toLowerCase()) return 1;
    return 0;
  });

const getDisplayValue = (value) => {
  let display = value;
  if (value === false) {
    display = "No";
  } else if (value === true) {
    display = "Yes";
  }
  return display;
};
// need to improve , if value is different type, will return not Equal.
const checkArrayValuesAllEqual = (valuesArray, ) => {

  return valuesArray.every((value) => value === valuesArray[0]);
};

const checkObjOfObtKeyValueDifference = (ObjOfOjb, key) => {
  const valuesArray = Object.values(ObjOfOjb).map((obj) => obj[key]);
  return !checkArrayValuesAllEqual(valuesArray);
};

const getimageLinkArray = (imgUrls) => imgUrls.split("|");

export {
  sortStringArray,
  getDisplayValue,
  checkArrayValuesAllEqual,
  checkObjOfObtKeyValueDifference,
  getimageLinkArray,
};
