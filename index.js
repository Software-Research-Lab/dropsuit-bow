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
 * @returns {object} - Returns a 'Bag of Words' object, with a method to retrieve the processed array.
 */

Constructor.prototype.bow = function (inputData) {
  let out = bow_f(inputData, this.inputObj, this.dsout);
  return out;
};

//#endregion

//#region bow_f

const dropsuit_clnstr = require("../dropsuit-clnstr/index.js");
var ds_clnstr = new dropsuit_clnstr(null, false);

const dropsuit_tok = require("../dropsuit-tok/index.js");
let dstok = new dropsuit_tok(null, false);

/**
 * Constructs a Bag of Words (bow) object
 * @function
 * @constructor
 * @description Processes an array of requests and returns a bag of words object
 * @param {string} [inputsent=null] - Optional input sentence or word to be processed. If not provided, the constructor's input will be used.
 * @param {boolean} [dispout=false] - Display processing output results in the terminal.
 * @returns {object} - A bag of words object
 * @example
 * const bow = new bow(inputsent, dispout);
 */

function bow_f(inputsent, jsobData, dispout) {
  if (jsobData != null || inputsent != null) {
    if (jsobData == null) {
      jsobData = inputsent;
    } else if (inputsent == null) {
      inputsent = jsobData;
    }
    let tokenWords = dstok.tok(jsobData, 1).tokArr();
    inputsent = ds_clnstr.clnstr(inputsent).txt();
    var inputsentArr = dstok.tok(inputsent, 0).tokArr();
    let bows = getBows(inputsentArr, tokenWords);
    let charBow = getCharBows(inputsentArr);
    let bow = bowsObj(tokenWords, bows[0], bows[1], charBow);
    display(inputsent, dispout, tokenWords, bows[0], bows[1], charBow); /// DISPLAY >>
    return bow;
  }
}

function getBows(inputsentArr, tokenWords) {
  let nBow = [];
  const wBow = {};
  for (z = 0; z < tokenWords.length; z++) {
    nBow.push(0);
  }
  for (f = 0; f < inputsentArr.length; f++) {
    let p = inputsentArr[f]
      .trim()
      .toLowerCase()
      .replace(/[^\w\s]/g, "");
    for (let i = 0; i < tokenWords.length; i++) {
      let token = tokenWords[i].trim();
      if (token == p) {
        objIndex = tokenWords.indexOf(token);
        if (objIndex !== -1) {
          let indexVal = nBow[objIndex];
          nBow[objIndex] = indexVal + 1;
          wBow[token] = (wBow[token] || 0) + 1;
        }
      }
    }
  }
  return [wBow, nBow];
}

function getCharBows(sentence) {
  let aos = arrStrChecker(sentence);
  sentence = arrToStr(sentence, aos);
  const bag = {};
  let charToken;
  for (var i = 0; i < sentence.length; i++) {
    charToken = sentence.charAt(i);
    if (!bag[charToken]) {
      bag[charToken] = 1;
    } else {
      bag[charToken]++;
    }
  }
  return [bag, sentence];
}

function bowsObj(tokenWords, wBow, nBow, charBow) {
  const bowobj = {
    tokenized: tokenWords,
    word_bow: wBow,
    numb_bow: nBow,
    char_bow: charBow[0],
    cont_str: charBow[1],
    tokens: function () {
      return this.tokenized;
    },
    cntStr: function () {
      return this.cont_str;
    },
    wrdBow: function () {
      return this.word_bow;
    },
    numBow: function () {
      return this.numb_bow;
    },
    chrBow: function () {
      return this.char_bow;
    },
  };
  return bowobj;
}

function arrStrChecker(inputdtwords) {
  let isArray = arrChecker(inputdtwords);
  var isString = stringChecker(inputdtwords);
  if (isString == true) {
    return "string";
  } else if (isArray == true) {
    return "array";
  }
}

function arrChecker(array) {
  const result = Array.isArray(array);
  if (result) {
    return true;
  } else {
    return false;
  }
}

function stringChecker(string) {
  if (typeof string === "string") {
    return true;
  } else {
    return false;
  }
}

function arrToStr(input, aos) {
  let out;
  if (aos == "array") {
    out = input.join(" ").replace(/\s/g, "");
    return out;
  } else {
    return input;
  }
}

//#endregion

//#region console log

const getdt = require("./infodt.js");
let fnctit = getdt.displayInfoData();
const line = fnctit.line;
var description = fnctit.descript;

function display(inputsent, dispout, tokenWords, wBow, nBow, charBow) {
  if (dispout == true) {
    console.log(
      description,
      "\nInput:",
      [inputsent],
      "\n\nTokens (",
      tokenWords.length,
      "):\n\n",
      tokenWords,
      "\n\nBOW values:\n\n",
      nBow,
      "\n\nBag of Words:\n\n",
      wBow,
      "\n\nChar BOW\n\n",
      charBow,
      "\n",
      line
    );
  }
}

//#endregion

//#region Export Module Constructor

module.exports = Constructor;

//#endregion
