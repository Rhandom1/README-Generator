// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  [![Contributors][contributors-shield]][contributors-url]
  [![Forks][forks-shield]][forks-url]
  [![Stargazers][stars-shield]][stars-url]
  [![Issues][issues-shield]][issues-url]
  [![MIT License][license-shield]][license-url]
  [![LinkedIn][linkedin-shield]][linkedin-url]

  <details open="open">
    <summary>Table of Contents</summary>
    <ol>
      <li>
        <a href="#about-the-project">Usage</a>
        <ul>
          <li><a href="#built-with">Dependencies</a></li>
        </ul>
      </li>
      <li>
        <a href="#getting-started">Testing</a>
        <ul>
          <li><a href="#prerequisites">Questions</a></li>
          <li><a href="#installation">Installation</a></li>
        </ul>
      </li>  
      <li><a href="#contributing">Contributing</a></li>
      <li><a href="#license">License</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#acknowledgements">Acknowledgements</a></li>
    </ol>
  </details>
  
  
  ## Description
  ${data.description}
  
  ### Dependencies
  ${data.dependencies}
  
  ## Usage
  ${data.usage}
  
  ### Testing
  ${data.test}
  
  ### Installation
  ${data.installation}

  ## Contributing
  ${data.contribution}
  
  ## License
  ${data.license}

  ## Contact
  
  Your Name - ${data.userName}
  
  Email: ${data.email}
  
  <!-- MARKDOWN LINKS & IMAGES -->
  <!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
  [contributors-shield]: https://img.shields.io/github/contributors/${data.userName}/${data.title}.svg?style=for-the-badge
  [contributors-url]: https://github.com/${data.userName}/Best-README-Template/graphs/contributors
  [forks-shield]: https://img.shields.io/github/forks/${data.userName}/${data.title}.svg?style=for-the-badge
  [forks-url]: https://github.com/${data.userName}/Best-README-Template/network/members
  [stars-shield]: https://img.shields.io/github/stars/${data.userName}/${data.title}.svg?style=for-the-badge
  [stars-url]: https://github.com/${data.userName}/Best-README-Template/stargazers
  [issues-shield]: https://img.shields.io/github/issues/${data.userName}/${data.title}.svg?style=for-the-badge
  [issues-url]: https://github.com/${data.userName}/Best-README-Template/issues
  [license-shield]: https://img.shields.io/github/license/${data.userName}/${data.title}.svg?style=for-the-badge
  [license-url]: https://github.com/${data.userName}/Best-README-Template/blob/master/LICENSE.txt
  [product-screenshot]: images/screenshot.png
  

`;
}

module.exports = generateMarkdown;
