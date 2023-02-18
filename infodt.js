//#region Dysplay info data

function displayInfoData() {
  const liblink =
    "DropSuit: https://github.com/ladooniani/DropSuit#readme\n" +
    "Copyright © 2016-" +
    getYear() +
    " Lado Oniani - DropSuit. All Rights Reserved.\n\n";
  const libName = "DropSuit NLP module library function:\n";
  const line =
    "\n———————————————————————————————————————————————————————————\n\n";
  const divider =
    "\n-----------------------------------------------------------\n";
  const libraryInformation = line + liblink + libName;
  const functionDescription = `${libraryInformation}
  bow(null/string, boolean, boolean)
  Input: string (Sentence raw string), or null (to process the constructor input)
  boolean (true/false) for enabling or disabling stemming for input string tokens
  boolean (true/false) for enabling or disabling stemming for data tokens
  ${divider}`;

  const displayInfoData = {
    descript: functionDescription,
    line: line,
  };

  return displayInfoData;
}

function getYear() {
  return new Date().getFullYear();
}

//#endregion

//#region Modules

module.exports = {
  displayInfoData,
};

//#endregion
