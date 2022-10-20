// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var badge = "";
  switch (license){
    case "MIT":
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Mozilla":
      badge ="[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    case "IBM":
      badge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
      break;
    default:
      badge = "";
      break;
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var link = "";
  switch (license){
    case "MIT":
      link = "[MIT](https://opensource.org/licenses/MIT)";
      break;
    case "Mozilla":
      link = "[Mozilla](https://opensource.org/licenses/MPL-2.0)";
      break;
    case "IBM":
      link = "[IBM](https://opensource.org/licenses/IPL-1.0)";
      break;
    default:
      link ="n/a";
      break
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return;
}
// idk what ya'll wanted or were asking for here


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## description 
  ${data.desc}
  ## table of contents
  [description](#description)

  [installation](#installations)

  [useage](#usage)

  [credits](#credits)

  [license](#license)

  [features](#features)

  [questions](#questions)
  ## installation 
  ${data.inst} 
  ## usage 
  ${data.use} 
  ## credits 
  ${data.credits} 
  ## licenses 
  ${renderLicenseLink(data.license)}
  ## features 
  ${data.feat}
  ## questions 
  github?:[${data.git}](${data.git}) 
  
  email?:[${data.email}](${data.email}) 
  `;
}

module.exports = generateMarkdown;
