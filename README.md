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

Process [intents.json](https://github.com/ladooniani/dropsuit-bow/blob/main/test/intents.json) using 'jsonIntStrct' function:

```
const json_data = require("dropsuit-bow/jsobj.js");
let intentData = json_data.jsonIntStrct("assets/json/intents.json");

```

or provide either an 'inputArray' of strings or leave it as null to process the bag of words from the input sentence.

```
let inputArray = [
  "John likes to watch movies. Mary likes movies too.",
  "Mary also likes to watch football games.",
];

```

To display processing results output information in the terminal, set the boolean parameter argument value to true:

```
let dsbow = new dropsuit_bow(inputArray, true);
```

#### bow(input: string|array|null, stemInput: boolean, stemData: boolean)

- **input**: Input sentence string, or keep as null to process constructor 'input'. Processes default object instance key value _(req_arr: requests)_.
- **stemInput**: (true/false) Enable or disable stemming for input string tokens.
- **stemData**: (true/false) Enable or disable stemming for data tokens.

```
let input = "John likes to watch movies. Mary likes movies too.";

let out = dsbow.bow(input, false, false);
console.log(out);
```

Processing output:

```
Input:

Sentence words ( 9 ) stemming ( false ) number ( 9 ):

 [
  'john',   'likes',
  'to',     'watch',
  'movies', 'mary',
  'likes',  'movies',
  'too'
]

Data tokens ( 10 ) stemming ( false ) number ( 10 ):

 [
  'john',     'likes',
  'to',       'watch',
  'movies',   'mary',
  'too',      'also',
  'football', 'games'
]

Output:

 [
  1, 2, 1, 1, 2,
  1, 1, 0, 0, 0
]

```

```
 [
  1, 2, 1, 1,
  2, 1, 1
]
```

## Links

- npm: https://www.npmjs.com/package/dropsuit-bow

## Supporting DropSuit

DropSuit is an open-source library and I am dedicated to ensuring its continued development and improvement. If you have any questions, feedback, or encounter any issues, please reach out through the [support via PayPal](https://www.paypal.com/paypalme/dropsuit?country.x=GE&locale.x=en_US), and read more about [support details](https://github.com/ladooniani/dropsuit/blob/main/Support.md).

Your support is crucial for the library's success. You can also contribute to the project by submitting bug reports, feature requests, or by providing feedback. Sharing the library with others who may find it useful and giving it a star on GitHub are also great ways to show your support. Thank you for using DropSuit!

## License

[Apache License 2.0](LICENSE.txt)
