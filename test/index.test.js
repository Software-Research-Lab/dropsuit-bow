//#region bow test

const assert = require("assert");
const dropsuit_bow = require("../index.js");

//#region Expected input and outputs

let inputArray = [
  "John likes to watch movies. Mary likes movies too.",
  "Mary also likes to watch football games.",
];

let ClassicBOW =
  "Classic BOW: Counts the frequency of words in a given input sentence against itself: [1, 2, 1, 1, 2, 1, 1].";

let expected_output_bow_bowb1 = {
  john: 1,
  likes: 2,
  to: 1,
  watch: 1,
  movies: 2,
  mary: 1,
  too: 1,
};

let BOWwithVocabulary =
  "BOW with Vocabulary: Counts the frequency of words in a given input sentence against a corpus of input sentences: [1, 2, 1, 1, 2, 1, 1, 0, 0, 0]";

let expected_output_bow_bowb2 = {
  john: 1,
  likes: 2,
  to: 1,
  watch: 1,
  movies: 2,
  mary: 1,
  too: 1,
};

let CorpusBOW =
  "Corpus BOW: Counts the frequency of words in a corpus of input sentences: [1, 3, 2, 2, 2, 2, 1, 1, 1, 1].";

let expected_output_bow_bowb3 = {
  john: 1,
  likes: 3,
  to: 2,
  watch: 2,
  movies: 2,
  mary: 2,
  too: 1,
  also: 1,
  football: 1,
  games: 1,
};

let BOWComparison =
  "BOW Comparison: Counts the frequency of words in one input sentence against another input sentence (optional) [0, 1, 1, 1, 0, 1, 0] or [1, 0, 2, 1, 1, 0, 0].";

let expected_output_bow_bowb4 = { mary: 1, likes: 1, to: 1, watch: 1 };
let expected_output_bow_bowb5 = { likes: 2, to: 1, watch: 1, mary: 1 };

let CorpusComparisonBOW =
  "Corpus Comparison BOW: Counts the frequency of words in a corpus of input sentences against one input sentence (optional) [1, 3, 2, 2, 2, 2, 1] or [2, 1, 3, 2, 2, 1, 1].";

let expected_output_bow_bowb6 = {
  john: 1,
  likes: 3,
  to: 2,
  watch: 2,
  movies: 2,
  mary: 2,
  too: 1,
};
let expected_output_bow_bowb7 = {
  likes: 3,
  to: 2,
  watch: 2,
  mary: 2,
  also: 1,
  football: 1,
  games: 1,
};

//#endregion

describe("dropsuit-bow", () => {
  describe("bow()", () => {
    it(ClassicBOW, () => {

      //#region equal input-output
      /**
       * let dsbow = new dropsuit_bow(inputArray[0], false);
       * let bow_bowb_output1 = dsbow.bow(null);
       * Or:
       * let dsbow = new dropsuit_bow(inputArray[0], false);
       * let bow_bowb_output1 = dsbow.bow(inputArray[0]);
       */
      //#endregion

      let dsbow1 = new dropsuit_bow(null, true);
      let bow_bowb_output1 = dsbow1.bow(inputArray[0]).bow();
      console.log("\n\nOutput bow():", bow_bowb_output1, "\n\n");
      assert.deepEqual(bow_bowb_output1, expected_output_bow_bowb1);
    });

    it(BOWwithVocabulary, () => {
      let dsbow = new dropsuit_bow(inputArray, false);
      let bow_bowb_output2 = dsbow.bow(inputArray[0]).bow();
      console.log("\n\nOutput bow():", bow_bowb_output2, "\n\n");
      assert.deepEqual(bow_bowb_output2, expected_output_bow_bowb2);
    });

    it(CorpusBOW, () => {
      
      //#region equal input-output
      /**
       * Same result:
       * let dsbow = new dropsuit_bow(inputArray, false);
       * let bow_bowb_output4 = dsbow.bow(null);
       * or:
       * let dsbow = new dropsuit_bow(inputArray, false);
       * let bow_bowb_output9 = dsbow.bow(inputArray);
       */
      //#endregion

      let dsbow = new dropsuit_bow(null, false);
      let bow_bowb_output3 = dsbow.bow(inputArray).bow();
      console.log("\n\nOutput bow():", bow_bowb_output3, "\n\n");
      assert.deepEqual(bow_bowb_output3, expected_output_bow_bowb3);
    });

    it(BOWComparison, () => {
      let dsbow4 = new dropsuit_bow(inputArray[0], false);
      let bow_bowb_output4 = dsbow4.bow(inputArray[1]).bow();
      console.log("\n\nOutput bow():", bow_bowb_output4, "\n\n");
      assert.deepEqual(bow_bowb_output4, expected_output_bow_bowb4);

      let dsbow5 = new dropsuit_bow(inputArray[1], false);
      let bow_bowb_output5 = dsbow5.bow(inputArray[0]).bow();
      console.log("\n\nOutput bow():", bow_bowb_output5, "\n\n");
      assert.deepEqual(bow_bowb_output5, expected_output_bow_bowb5);
    });

    it(CorpusComparisonBOW, () => {
      let dsbow6 = new dropsuit_bow(inputArray[0], false);
      let bow_bowb_output6 = dsbow6.bow(inputArray).bow();
      console.log("\n\nOutput bow():", bow_bowb_output6, "\n\n");
      assert.deepEqual(bow_bowb_output6, expected_output_bow_bowb6);

      let dsbow7 = new dropsuit_bow(inputArray[1], false);
      let bow_bowb_output7 = dsbow7.bow(inputArray).bow();
      console.log("\n\nOutput bow():", bow_bowb_output7, "\n\n");
      assert.deepEqual(bow_bowb_output7, expected_output_bow_bowb7);
    });
  });
});

//#endregion
