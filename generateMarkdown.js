const licenses = require("./licenses.json");

const generateTableOfContents = function(sectionData) {
  let { installation, usage, contributing, tests } = sectionData;
  let sections = [];
  if (installation !== "") {
    sections.push("1. [Installation](#installation)")
  }
  if (usage !== "") {
    sections.push("1. [Usage](#usage)")
  }
  section.push("1. [License](#license)")
  if (contributing !== "") {
    sections.push("1. [Contributing](#contributing)")
  }
  if (tests !== "") {
    sections.push("1. [Tests](#tests)")
  }
  sections.push("1. [Questions](#questions)")
  return sections.join("\n");
}

module.exports = function (props) {
  let { title, description, installation, usage, contributing, tests, github, email } = props;
  let license = licenses[props.license];
  let profile = `# ${title}
[![License](https://img.shields.io/badge/License-${license.text}-${license.color}.svg)](${license.link})

## Description
    
${description}


## Table of Contents
1. [Installation](#installation)
1. [Usage](#usage)
1. [License](#license)
1. [Contributing](#contributing)
1. [Tests](#tests)
1. [Questions](#questions)

## installation
    
${installation}
    
## Usage
    
${usage}
    
## License
    
${license.text}
    
## Contributing
    
${contributing}
    
## Tests
    
${tests}
    
## Questions

Github: ${github}
email: ${email}`;
  return profile;
}