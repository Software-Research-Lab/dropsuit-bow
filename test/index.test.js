//#region bow test

const assert = require("assert");
const dropsuit_bow = require("../index.js");

let inputArray = [
  "John likes to watch movies. Mary likes movies too.",
  "Mary also likes to watch football games.",
];

let expected_output_bow_bowb1 = [1, 2, 1, 1, 2, 1, 1, 0, 0, 0];
let expected_output_bow_bowb2 = [0, 1, 1, 1, 0, 1, 0, 1, 1, 1];
let expected_output_bow_bowb_stmming = [1, 1, 1, 0, 1, 1, 0, 1, 0];

describe("dropsuit-bow", () => {
  describe("bow()", () => {
    it(
      "should return the Bag of Words with input sentence: `" +
        inputArray[0] +
        "`",
      () => {
        let dsbow = new dropsuit_bow(inputArray, true);
        let bow_bowb_output1 = dsbow.bow(inputArray[0], false, false);
        console.log("\n\nOutput bow():", bow_bowb_output1, "\n\n");
        assert.deepEqual(bow_bowb_output1, expected_output_bow_bowb1);
      }
    );
    it(
      "should return the Bag of Words with input sentence: `" +
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
      "should return the Bag of Words from stemmed input data: `" +
        inputArray[0] +
        "`",
      () => {
        let dsbow = new dropsuit_bow(inputArray, false);
        let bow_bowb_output3 = dsbow.bow(inputArray[0], true, true);
        console.log("\n\nOutput bow():", bow_bowb_output3, "\n\n");
        assert.deepEqual(bow_bowb_output3, expected_output_bow_bowb_stmming);
      }
    );
  });
});

//#endregion
