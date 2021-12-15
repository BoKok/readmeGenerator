// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(questions) {
const {title, description, install, usage, contribution, test, email, username, license} = questions[0];

  return `
  # ${title}

  ## Description 
  ${description}

  ## Table of Contents
  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [Contribution](#Contribution)
  4. [Test](#Test)

  ## License
  ![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg

  ## Installation
  ${install}

  ## Usage 
  ${usage}

  ## Contribution
  ${contribution}

  ## Test
  ${test}
  
  # Questions
<github.com/${username}
  E-mail: ${email}
`
;

}

module.exports = generateMarkdown;
