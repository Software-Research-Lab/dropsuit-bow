//#region bow test

const assert = require("assert");
const dropsuit_bow = require("../index.js");

let inputArray = [
  "John likes to watch movies. Mary likes movies too.",
  "Mary also likes to watch football games.",
];

let expected_output_bow_bowb0 = [1, 2, 1, 1, 2, 1, 1];
let expected_output_bow_bowb1 = [1, 2, 1, 1, 2, 1, 1, 0, 0, 0];
let expected_output_bow_bowb2 = [0, 1, 1, 1, 0, 1, 0, 1, 1, 1];

let expected_output_bow_bowb4 = [1, 3, 2, 2, 2, 2, 1, 1, 1, 1];

describe("dropsuit-bow", () => {
  describe("bow()", () => {
    it(
      "should return the Bag of Words with input sentence: `" +
        inputArray[1] +
        "`",
      () => {
        let dsbow = new dropsuit_bow(null, false);
        let bow_bowb_output0 = dsbow.bow(inputArray[0], false, false);
        console.log("\n\nOutput bow():", bow_bowb_output0, "\n\n");
        assert.deepEqual(bow_bowb_output0, expected_output_bow_bowb0);
      }
    );
    it(
      "should return the Bag of Words with input sentence with base: `" +
        inputArray[0] +
        "`",
      () => {
        let dsbow = new dropsuit_bow(inputArray, false);
        let bow_bowb_output1 = dsbow.bow(inputArray[0], false, false);
        console.log("\n\nOutput bow():", bow_bowb_output1, "\n\n");
        assert.deepEqual(bow_bowb_output1, expected_output_bow_bowb1);
      }
    );
    it(
      "should return the Bag of Words with input sentence with array: `" +
        inputArray[1] +
        "`",
      () => {
        let dsbow = new dropsuit_bow(inputArray, false);
        let bow_bowb_output2 = dsbow.bow(inputArray[1], false, false);
        console.log("\n\nOutput bow():", bow_bowb_output2, "\n\n");
        assert.deepEqual(bow_bowb_output2, expected_output_bow_bowb2);
      }
    );

    it(
      "should return the Bag of Words from array: `" + inputArray[0] + "`",
      () => {
        let dsbow = new dropsuit_bow(inputArray, false);
        let bow_bowb_output4 = dsbow.bow(null, false, false);
        console.log("\n\nOutput bow():", bow_bowb_output4, "\n\n");
        assert.deepEqual(bow_bowb_output4, expected_output_bow_bowb4);
      }
    );
    
  });
});

//#endregion
