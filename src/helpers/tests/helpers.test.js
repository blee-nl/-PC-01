import {
  sortStringArray,
  getDisplayValue,
  checkArrayValuesAllEqual,
  getimageLinkArray,
} from "../index";

describe("helper functions test", () => {
  it("sortStringArray: sort String Array ", () => {
    const testArray = [
      "one",
      "two",
      "three",
      "Four",
      "1",
      "Five",
      "sive",
      "SeVen",
    ];
    const result = [
      "1",
      "Five",
      "Four",
      "one",
      "SeVen",
      "sive",
      "three",
      "two",
    ];
    expect(sortStringArray(testArray)).toEqual(result);
  });
  it("getDisplayValue: true and false bool value to Display string value [ yes, no ] ", () => {
    expect(getDisplayValue(false)).toEqual("No");
    expect(getDisplayValue(true)).toEqual("Yes");
    expect(getDisplayValue("abc")).toEqual("abc");
  });

  it("checkArrayValuesAllEqual: check array values are all same or not ", () => {
    const testArray1 = [
      "one",
      "two",
      "three",
      "Four",
      "1",
      "Five",
      "sive",
      "SeVen",
    ];
    const testArray2 = [1, 1, "", 1];
    const testArray3 = [3, 3, 3];
    const testArray4 = ["", "", undefined, ""];
    const testArray5 = [3, 3, "3", 3];

    expect(checkArrayValuesAllEqual(testArray1)).toEqual(false);
    expect(checkArrayValuesAllEqual(testArray2)).toEqual(false);
    expect(checkArrayValuesAllEqual(testArray3)).toEqual(true);
    expect(checkArrayValuesAllEqual(testArray4)).toEqual(false);
    expect(checkArrayValuesAllEqual(testArray5)).toEqual(false);
  });
  it("getimageLinkArray ", () => {
    const imageUrlsString = "url1|url2|url3";
    const result = ["url1", "url2", "url3"];

    expect(getimageLinkArray(imageUrlsString)).toEqual(result);
  });
});
