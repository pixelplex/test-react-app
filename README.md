# React Code Assignment

The test project will be a ReactJS web application.

## Getting started

### Installation

1. Clone the project
2. Move to the cloned directory
3. `npm install` to install the website's npm dependencies
4. Will need to register and get API_KEY https://www.themoviedb.org/account/signup
5. Create file `./config/local.config.js`
   ```
   module.exports = {
   	api: {
   		url: 'https://api.themoviedb.org',
   		key: '<API_KEY>',
   	},
   };

   ```


### Running locally

1. `npm start` to start the hot-reloading development server
1. `http://localhost:8080` to open the site in your favorite browser

### Build project
1. `npm run build` Build and put the project in a folder /dist
