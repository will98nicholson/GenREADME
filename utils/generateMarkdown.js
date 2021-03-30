// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

    if (license === 'Apache License 2.0') {
        return `![badge](https://img.shields.io/badge/license-Apache%20License%202.0-brightgreen)`
    }
    else if (license === 'MIT') {
        return `![badge](https://img.shields.io/badge/license-MIT-brightgreen)`
    }
    else {
        return " "
    }
}
//![Crates.io](https://img.shields.io/crates/l/will98nicholson)
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'Apache License 2.0') {
        return `https://choosealicense.com/licenses/apache-2.0/`
    }
    else if (data.license === 'MIT') {
        return `https://choosealicense.com/licenses/mit/`
    }
    else {
        return " "
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'MIT') {
        return `MIT License

                Copyright (c) [2021] 
                
                Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files (the "Software"), to deal
                in the Software without restriction, including without limitation the rights
                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:
                
                The above copyright notice and this permission notice shall be included in all
                copies or substantial portions of the Software.
                
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                SOFTWARE.`
    }
    if (license === 'Apache License 2.0') {
        return `
        Apache License
        Version 2.0, January 2004
        http://www.apache.org/licenses/
`
    }
    else {
        return ''
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
# ${data.title}
${renderLicenseBadge(data.license)}

## Table of Contents:
[Description](#Description)\n
[Installation](#Installation)\n
[Usage information](#Usage-Information)\n
[Contributors](#Contributors)\n
[Test Instructions](#Test-Instructions)\n
[Questions](#Questions)\n

## Description

${data.Description}

## Installation 

${data.Installation}

## Usage Information

${data.Usage}

## Contributing

${data.Contribution}

## Test Instructions 

${data.Tests}

## License
${renderLicenseSection(data.license)}

## Questions

Github : https://github.com/${data.questions}

Additional questions? You can reach me at:

${data.Email}




`;
}

module.exports = generateMarkdown;
