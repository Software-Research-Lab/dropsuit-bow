[<img alt="TAI Lab." width="59px" src="https://github.com/ladooniani/tailab/blob/master/assets/tai_lab_terbinari_cbm_project_logo.png" />](https://github.com/ladooniani/dropsuit#readme)

[![npm version](https://img.shields.io/npm/v/dropsuit-bow.svg?style=flat)](https://www.npmjs.com/package/dropsuit-bow) [![npm](https://img.shields.io/npm/dt/dropsuit-bow.svg?style=flat-square)](https://www.npmjs.com/package/dropsuit-bow) [![License](https://img.shields.io/npm/l/dropsuit-bow.svg)](https://www.npmjs.com/package/dropsuit-bow)

# Overview of [DropSuit](https://github.com/ladooniani/dropsuit#readme) NLP and the bow Function

[DropSuit](https://github.com/ladooniani/dropsuit#readme) NLP is an open-source JavaScript and Node.js library offering diverse functions for natural language processing and data manipulation. The bow function is one of its modules, designed for generating a bag of words from input text and data requests. It returns an array of 'bag of words'. It is available under the Apache License 2.0.

## DropSuit NLP Method: bow - A JavaScript and Node.js function for generating a bag of words from input and data requests

The bow function is a part of the DropSuit NLP library, it's a JavaScript and Node.js function that generates a bag of words from input text and data requests, it returns an array of 'bag of words'. It's open-source and available under the Apache License 2.0.

### Installation

Add the library function by installing it via npm:

```
npm install dropsuit-bow
```

### Usage

Import the library in your project:

```
const dropsuit_bow = require("dropsuit-bow");

```

The provided code imports the Dropsuit Bow library into your project. You can create a new instance of the dropsuit_bow class by passing in null as the argument, which will process the basic bag of words from the input sentence. If you want to see the processing results in the terminal, you can set the second argument to true when creating the instance, like this:

```
let dsbow = new dropsuit_bow(null, false);
```

#### bow(input: string|array|null)

- **input**: Input sentence string, or leave as null to use constructor input.

#### Return option:

- **bow()** Returns the bag of words (BOW) with word count pairs in the format of `{ 'word': 1 }`.
- **value()** Returns the numeric BOW array `[ 0, 1 ]`
- **count()** Returns character frequency vector `{ 'a': 1 }`.
- **tokens()** Returns an array of processed tokens.
- **design(type, delimiter)** Returns 'pascal' and 'camel' case with delimiter.

```
let input = "John likes to watch movies. Mary likes movies too.";

let out = dsbow.bow(input);
console.log(out);
```

Processing output:

```
 {
  tokenized: [
    'john',   'likes',
    'to',     'watch',
    'movies', 'mary',
    'too'
  ],
  word_bow: { john: 1, likes: 2, to: 1, watch: 1, movies: 2, mary: 1, too: 1 },
  numb_bow: [
    1, 2, 1, 1,
    2, 1, 1
  ],
  proc_str: 'john likes to watch movies mary likes movies too',
  cont_str: 'johnlikestowatchmoviesmarylikesmoviestoo',
  char_bow: {
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
    y: 1
  },
  tokens: [Function: tokens],
  bow: [Function: bow],
  value: [Function: value],
  design: [Function: design],
  count: [Function: count]
}

```

## Design

The design(type, delimiter) option in the bow() function returns the output strings in pascal or camel case with the specified delimiter. The type parameter can be either "pascal" or "camel". The delimiter parameter is optional and can be any string. If not provided, the default delimiter is an empty string. Here's an example usage:

```
let dsbdes = new dropsuit_bow(null, false);
let output1 = dsbdes.bow(input).design(); // Default behavior: returns output strings in the original case without delimiter
let output2 = dsbdes.bow(input).design(""); // Equivalent to output1
let output3 = dsbdes.bow(input).design("", "-"); // Returns output strings in the original case with a hyphen delimiter
let output4 = dsbdes.bow(input).design("pascal"); // Returns output strings in pascal case without delimiter
let output5 = dsbdes.bow(input).design("pascal", "-"); // Returns output strings in pascal case with a hyphen delimiter
let output6 = dsbdes.bow(input).design("camel"); // Returns output strings in camel case without delimiter
let output7 = dsbdes.bow(input).design("camel", "~"); // Returns output strings in camel case with a tilde delimiter
```

Refer to the [tests](https://github.com/ladooniani/dropsuit-bow/blob/main/test/index.test.js) for more information on how to use additional options for Bag of Words. You can provide an 'intentData' object from the [intents.json](https://github.com/ladooniani/dropsuit-bow/blob/main/test/intents.json) file to the constructor using the 'jsonIntStrct' function, as shown below:

```
const json_data = require("dropsuit-bow/jsobj.js");
let intentData = json_data.jsonIntStrct("assets/json/intents.json");

```

Alternatively, you can provide an array of strings to the constructor as input:

```
let inputArray = [
  "John likes to watch movies. Mary likes movies too.",
  "Mary also likes to watch football games.",
];
```

## Links

- npm: https://www.npmjs.com/package/dropsuit-bow

## Supporting DropSuit

DropSuit is an open-source library and I am dedicated to ensuring its continued development and improvement. If you have any questions, feedback, or encounter any issues, please reach out through the [support via PayPal](https://www.paypal.com/paypalme/dropsuit?country.x=GE&locale.x=en_US), and read more about [support details](https://github.com/ladooniani/dropsuit/blob/main/Support.md).

Your support is crucial for the library's success. You can also contribute to the project by submitting bug reports, feature requests, or by providing feedback. Sharing the library with others who may find it useful and giving it a star on GitHub are also great ways to show your support. Thank you for using DropSuit!

## License

[Apache License 2.0](LICENSE.txt)
