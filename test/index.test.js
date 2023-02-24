//#region bow test

const assert = require("assert");
const dropsuit_bow = require("../index.js");

//#region Expected input and outputs

let input = "John likes to watch movies. Mary likes movies too.";

let inputArray = [
  "John likes to watch movies. Mary likes movies too.",
  "Mary also likes to watch football games.",
];

let ClassicBOW =
  "Classic BOW: Counts the frequency of words in a given input sentence: [1, 2, 1, 1, 2, 1, 1].";

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

let bowValues = [1, 2, 1, 1, 2, 1, 1];
let tokenized = ["john", "likes", "to", "watch", "movies", "mary", "too"];

let charFreqVec = {
  j: 1,
  o: 6,
  h: 2,
  n: 1,
  l: 2,
  i: 4,
  k: 2,
  e: 4,
  s: 4,
  t: 3,
  w: 1,
  a: 2,
  c: 1,
  m: 3,
  v: 2,
  r: 1,
  y: 1,
};

let clean_string = "john likes to watch movies mary likes movies too";
let string_design_basic = "johnlikestowatchmoviesmarytoo";
let string_delimiter = "john-likes-to-watch-movies-mary-too";
let pascal_case = "JohnLikesToWatchMoviesMaryToo";
let pascal_case_delimiter = "John-Likes-To-Watch-Movies-Mary-Too";
let camel_case = "johnLikesToWatchMoviesMaryToo";
let camel_case_delimiter = "john~Likes~To~Watch~Movies~Mary~Too";

//#endregion

describe("dropsuit-bow", () => {
  describe("bow()", () => {
    //#region BOW

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
      let dsbow2 = new dropsuit_bow(inputArray, false);
      let bow_bowb_output2 = dsbow2.bow(inputArray[0]).bow();
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

      let dsbow3 = new dropsuit_bow(null, false);
      let bow_bowb_output3 = dsbow3.bow(inputArray).bow();
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

    //#endregion

    //#region Character frequency vector

    it("Character frequency vector", () => {
      let cfvc = new dropsuit_bow(null, false);
      let cfv = cfvc.bow(input).count();
      let val = cfvc.bow(input).value();
      let tok = cfvc.bow(input).tokens();

      //#region console log

      console.log(
        "\n\nOutput bow().count():",
        cfv,
        "\nOutput bow().value():",
        val,
        "\nOutput bow().token():",
        tok,
        "\n"
      );

      //#endregion

      assert.deepEqual(cfv, charFreqVec);
      assert.deepEqual(val, bowValues);
      assert.deepEqual(tok, tokenized);
      console.log(tok);
    });

    //#endregion

    //#region Design options

    it("String design case and delimiter options", () => {
      let dsbdes = new dropsuit_bow(null, false);
      let output1 = dsbdes.bow(input).design();
      let output2 = dsbdes.bow(input).design(""); /// Equal result: // .design("-"); // .design("", ""); // .design("xpkd", "ztfp")
      let output3 = dsbdes.bow(input).design("", "-");
      let output4 = dsbdes.bow(input).design("pascal"); /// Equal result: // .design("pascal", "");
      let output5 = dsbdes.bow(input).design("pascal", "-");
      let output6 = dsbdes.bow(input).design("camel"); // .design("camel", "");
      let output7 = dsbdes.bow(input).design("camel", "~");

      //#region design examples log
      console.log(
        "\n\nOutput bow().design():",
        output1,
        "\nOutput bow().design(''):",
        output2,
        "\nOutput bow().design('', '-'):",
        output3,
        "\nOutput bow().design('pascal'):",
        output4,
        "\nOutput bow().design('pascal', '+'):",
        output5,
        "\nOutput bow().design('camel'):",
        output6,
        "\nOutput bow().design('camel', '~'):",
        output7
      );
      //#endregion

      assert.deepEqual(output1, clean_string);
      assert.deepEqual(output2, string_design_basic);
      assert.deepEqual(output3, string_delimiter);
      assert.deepEqual(output4, pascal_case);
      assert.deepEqual(output5, pascal_case_delimiter);
      assert.deepEqual(output6, camel_case);
      assert.deepEqual(output7, camel_case_delimiter);
    });

    //#endregion
  });
});

//#endregion
