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

- **input**: Input sentence string, or keep as null to process constructor 'input'.

```
let input = "John likes to watch movies. Mary likes movies too.";

let out = dsbow.bow(input);
console.log(out);
```

Processing output:

```

Input: [ 'john likes to watch movies mary likes movies too' ]

Tokens ( 7 ):

 [
  'john',   'likes',
  'to',     'watch',
  'movies', 'mary',
  'too'
]

BOW values:

 [
  1, 2, 1, 1,
  2, 1, 1
]

Bag of Words:

 { john: 1, likes: 2, to: 1, watch: 1, movies: 2, mary: 1, too: 1 }


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
