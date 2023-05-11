
<img width="962" alt="Screen Shot 2023-04-16 at 10 23 25 PM" src="https://user-images.githubusercontent.com/115671262/232370453-e8e3f4e3-e531-4ca7-b8cc-6d98a6be2a61.png">


## Description

Robotic Renaissance is a MERN-stack application that showcases a gallery of paintings created by robots. The website provides a platform for robot artists to showcase their work to art enthusiasts who want to explore this unique genre of art.

The front end of the website is built using React and provides a polished UI that is responsive and interactive. The back end uses MongoDB and the Mongoose ODM to store and manage data, while a GraphQL API handles queries and mutations for retrieving, adding, updating, and deleting data.  

To ensure the security of sensitive API key information, the website includes authentication using JWT. The application is deployed though Heroku and has a clean repository that meets quality coding standards.

Robotic Renaissance is a responsive user-friendly platform that provides robot artists and humans to connect through their love of art.

## Deployed Application
The live link has been taken down since Heroku is now charging for deployments. Files work locally.

https://robotic-renaissance.herokuapp.com/


## Table of Contents
- [Installation Steps](#installation-steps)
- [Usage](#usage)
- [Built With](#built-with)
- [License](#license)
- [Screenshots](#screenshots)
- [Testing](#testing)
- [Credits](#credits)

## Installation Steps
Before accessing the application locally, you must [install Node.js](https://nodejs.org/en/).  After installing Node.js, open the integrated terminal in VS Code run `npm install`.  This will install all of the dependencies listed in the package.json file.  

You may need to run an `npm install` on the client and server side to ensure you install the correct packages. 

<u>Installation Resources</u>:
- [Install Apollo Client](https://www.apollographql.com/docs/react/get-started)
- [Install jwt-decode](https://www.npmjs.com/package/jwt-decode)
- [Install React Router](https://reactrouter.com/en/main/start/tutorial)
- [Install bcrypt](https://www.npmjs.com/package/bcrypt)
- [Install MUI](https://mui.com/material-ui/getting-started/installation/)
- [Install Styled Components](https://styled-components.com/docs/basics#installation)
- [Install Jest](https://jestjs.io/docs/getting-started)

## Usage
The application can be run locally or through the deployed link.  

1. Before trying to run the application locally, make sure you have completed the [Installation Steps](#installation-steps)
2. Open integrated terminal in VS Code.
3. Run `npm run seed`
4. Run `npm run develop`
5. To access the Showcase you will need to Login or Register.
6. Once in the Showcase you can navigate through the Robots artwork using the scroll bar
7. Click on an individual piece of artwork to view the lore, price, and artist information
8. To view the admin panel to update, or delete users use `Ctrl + a`
9. Once on the admin panel select the user and click `Select User`
10. After selecting a user, you will be able to view the user data, update the user email, or delete a user from the gallery

## Built With:
[![Built and Tested With](https://skillicons.dev/icons?i=vscode,js,css,nodejs,react,styledcomponents,heroku,graphql,jest&theme=dark)](https://skillicons.dev)

### Additional Technologies Used
 - bcrypt
 - MUI Core
 - MidJourneyAi
 - ReactIcons

## Testing
The application uses Jest for component render testing.  The tests are located in the `client/src/components/componentTesting` folder.  To run the tests, open the integrated terminal in VS Code, navigate to the `Client` directory and run `npm run test`.  Press `a` to run all tests.  The tests will run in the terminal and will provide a pass or fail for each test.  
<br>
<img src="./client/src/images/jest.JPG" alt="Jest Tests" width="500px">
<br>

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Screenshots

### Homepage
<img width="700" height="400" alt="Screen Shot 2023-02-25 at 8 13 07 PM" src="https://user-images.githubusercontent.com/115671262/232625313-04ab15d4-48a9-4881-a0b2-bff054c739e2.png">

### Register 
<img width="700" height="400" alt="Screen Shot 2023-02-25 at 8 13 07 PM" src="https://user-images.githubusercontent.com/115671262/232625812-cfa2952e-88ff-4b50-b958-ca1bc65dea7f.png">

### Login
<img width="700" height="400" alt="Screen Shot 2023-02-25 at 8 13 07 PM" src="https://user-images.githubusercontent.com/115671262/232625997-4c08a129-bb42-40f7-8bb8-0526a24d8457.png">

### Showcase
<img width="700" height="400" alt="Screen Shot 2023-02-25 at 8 13 07 PM" src="https://user-images.githubusercontent.com/115671262/232626388-75148973-c540-4ce2-87c0-66eee6036380.png">

<img width="700" height="400" alt="Screen Shot 2023-02-25 at 8 13 07 PM" src="https://user-images.githubusercontent.com/115671262/232626559-cb9d7bec-5197-49f6-8d23-ffeb1bfb20ca.png">

### About Page
<img width="700" height="400" alt="Screen Shot 2023-02-25 at 8 13 07 PM" src="https://user-images.githubusercontent.com/115671262/232626982-f02f03d7-df71-44b5-824d-0782faea85f4.png">

## Credits

<a href="https://github.com/jk377y" target="_blank">
  <img src="https://user-images.githubusercontent.com/115671262/232370751-de894251-cecf-4b64-9763-7f1ae57f10d9.png" alt="james" width="120" style="margin-bottom:10px;">
</a>&nbsp;&nbsp;&nbsp;<a href="https://github.com/fabien1313" target="_blank">
  <img src="https://user-images.githubusercontent.com/115671262/232342243-3a19b50a-5050-41a5-9c72-157259198dec.png" alt="fabien" width="120" style="margin-bottom:10px;">
</a>&nbsp;&nbsp;&nbsp;<a href="https://github.com/rmob" target="_blank">
  <img src="https://user-images.githubusercontent.com/115671262/232342249-122bfaf0-3442-4f9d-b8cc-f52bef4bdeb6.png" alt="riley" width="120" style="margin-bottom:10px;">
</a><a href="https://github.com/sofiasosa92" target="_blank">
  <img src="https://user-images.githubusercontent.com/115671262/232341473-1112322a-c252-418c-ba2c-4fc301636f54.png" alt="sofia" width="120" style="margin-bottom:10px;">
</a><a href="https://github.com/TMortara" target="_blank">
  <img src="https://user-images.githubusercontent.com/115671262/232342236-fa8ac094-65e6-44d7-9e4c-52484f4b8fd6.png" alt="tracy" width="120" style="margin-bottom:10px;">
</a>
