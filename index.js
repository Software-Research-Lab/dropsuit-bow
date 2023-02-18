//#region Info

/**
 * @file <h3>DropSuit</h3>
 * <p>
 *   DropSuit is a JavaScript(ES6) and Node.js(v14.x) module library
 *   created by Lado Oniani that offers a diverse collection of functions
 *   for natural language processing (NLP) and data manipulation.
 *   It provides a curated collection of original and classic techniques and methods
 *   for tasks such as text analysis, language understanding and generation,
 *   as well as for data manipulation tasks. Additionally,
 *   it includes unique tools and features for chatbot dialog flow logic
 *   and other specific use cases.
 *   The library is open-source and available under the Apache License 2.0.
 *   Whether you're a researcher, developer, or data scientist,
 *   DropSuit offers a range of tools to enhance your work,
 *   with a focus on diversity and experimentation.
 * </p>
 * @author Lado Oniani
 * {@link https://github.com/ladooniani GitHub}
 * @see mailto:ladooniani@gmail.com
 * @version 1.0.0
 * @see https://github.com/ladooniani/DropSuit#readme
 * @copyright 2016-2023 Lado Oniani - DropSuit. All Rights Reserved.
 * @license Apache License 2.0
 */

//#endregion

//#region  Constructor

function Constructor(inputObj, dsout) {
  this.inputObj = inputObj;
  this.dsout = dsout;
}

//#endregion

//#region bow

/**
 * @Constructs bow
 * @description Creates a new instance of the 'Bag of Words' (bow) processing object.
 * This function can process both an input sentence/word, or use the default input specified in the constructor.
 * Processes default object instance key value (req_arr: requests).
 * @param {string} [input=null] - The input sentence/word to be processed. Leave as null to use the default input specified in the constructor.
 * @param {boolean} [s_dostem=false] - Enable or disable stemming for input string tokens.
 * @param {boolean} [d_dostem=false] - Enable or disable stemming for data tokens.
 * @returns {object} - Returns a 'Bag of Words' object, with a method to retrieve the processed array.
 */

Constructor.prototype.bow = function (inputData, s_dostem, d_dostem) {
  let out = bow_f(inputData, this.inputObj, s_dostem, d_dostem, this.dsout);
  return out;
};

//#endregion

//#region bow_f

const dropsuit_clnstr = require("../dropsuit-clnstr/index.js");
var ds_clnstr = new dropsuit_clnstr(null, false);

const dropsuit_tok = require("../dropsuit-tok/index.js");
let dstok = new dropsuit_tok(null, false);

const dropsuit_stem = require("../dropsuit-stem/index.js");
let dsstem = new dropsuit_stem(null, false);

/**
 * Constructs a Bag of Words (bow) object
 * @function
 * @constructor
 * @description Processes an array of requests and returns a bag of words object
 * @param {string} [inputsent=null] - Optional input sentence or word to be processed. If not provided, the constructor's input will be used.
 * @param {boolean} [s_dostem=false] - Enable or disable stemming for input string tokens.
 * @param {boolean} [d_dostem=false] - Enable or disable stemming for data tokens.
 * @param {boolean} [dispout=false] - Display processing output results in the terminal.
 * @returns {object} - A bag of words object
 * @example
 * const bow = new bow(inputsent, s_dostem, d_dostem, dispout);
 */

function bow_f(inputsent, jsobData, s_dostem, d_dostem, dispout) {
  let bagArr = [];
  let tokenWords = dstok.tok(jsobData, 1).tokArr();
  inputsent = ds_clnstr.clnstr(inputsent).txt();
  var inputsentArr = inputsent.split(" ");
  let inpTokNmb = tokenWords.length;
  let inpStrNmb = inputsentArr.length;
  if (s_dostem == true) {
    inputsentArr = dsstem.stem(inputsentArr, 0, 0);
  }
  if (d_dostem == true) {
    tokenWords = dsstem.stem(tokenWords, 0, 0);
  }
  for (z = 0; z < tokenWords.length; z++) {
    bagArr.push(0);
  }
  for (f = 0; f < inputsentArr.length; f++) {
    let p = inputsentArr[f].trim();
    for (s = 0; s < tokenWords.length; s++) {
      let w = tokenWords[s].trim();
      if (w == p) {
        objIndex = tokenWords.indexOf(w);
        if (objIndex !== -1) {
          let indexVal = bagArr[objIndex];
          bagArr[objIndex] = indexVal + 1;
        }
      }
    }
  }

  display(
    dispout,
    inputsentArr,
    tokenWords,
    inpStrNmb,
    inpTokNmb,
    s_dostem,
    d_dostem,
    bagArr
  ); /// DISPLAY >>
  return bagArr;
}

//#endregion

//#region console log

const getdt = require("./infodt.js");
let fnctit = getdt.displayInfoData();
const line = fnctit.line;
var description = fnctit.descript;

function display(
  dispout,
  inputsentArr,
  tokenWords,
  inpStrNmb,
  inpTokNmb,
  s_dostem,
  d_dostem,
  bagArr
) {
  if (dispout == true) {
    console.log(
      description,
      "\nInput:\n\nSentence words (",
      inpStrNmb,
      ") stemming (",
      s_dostem,
      ") number (",
      inputsentArr.length,
      "):\n\n",
      inputsentArr,
      "\n\nData tokens (",
      inpTokNmb,
      ") stemming (",
      d_dostem,
      ") number (",
      tokenWords.length,
      "):\n\n",
      tokenWords,
      "\n\nOutput:\n\n",
      bagArr,
      "\n",
      line
    );
  }
}

//#endregion

//#region Export Module Constructor

module.exports = Constructor;

//#endregion
