# Vinyl Market for SportCompass
E-commerce vinyl store for SportCompass Copenhagen internship assignment.

## Getting Started
In order to run this project you can either download it as a ZIP file directly from this repository or, if you have GIT installed on your computer, open a GIT Bash and run:
 - git clone "https://github.com/Crivoi/sportCompassStore.git"

After that, open a command prompt and navigate to the "sport_compass_store" folder inside the project and run:
 - npm install - this will install all needed dependencies and libraries

You can then run 
 - npm start - to start the app at [localhost:3000](http//localhost:3000)

For the testing enviroment, inside the same folder run (while the server is still up):
 - npm run cypress - this should open the **Cypress** interface from which you can select the *sample_spec.js* file and open it, which will begin testing (it may take 45-60 seconds for the test to run for the first time)

## Prerequisites
For this project to run, you must have Node.js and React installed. You can do this by going to the official [Node.js website](https://nodejs.org/en/), download and install the latest stable version and then, inside a command prompt (or terminal for MacOS and Linux) run:
 - node --version (to check if Node.js is installed correctly)

## Features
 - view store items
 - add / remove items from cart
 - displaying a notification upon adding items to the cart
 - checkout with all your products inside the cart
 - images of new products are replaced with a default one if an error occurs

## How It Works
Inside the project's "sport_compass_store/src/VinylDB" folder there is a JSON file that contains information about all the available records in the store (the last three of which contain a fake artwork property that leads to an image that does not exist to show that if a store item is missing the image, a default one loads). The App.js file handles most of the functionalities of the website that are presented in the previous section and the routing of the three pages (home page, cart page and about page) as well. Each other separate javascript file is a **React Component** meant to divide responsibilities between them for a more compact and easily understandable code:
 - Header.js and Footer.js are loaded on all of the store's pages and give access to all the routes that the store has ('/' for home page, '/cart' for cart page and '/about' for the about page)
 - Main.js loads the main home page, which contains the store's products
 - Vinyls.js is a container of such products that gets loaded inside Main.js
 - VinylItem.js is a template for each record that gets rendered inside Vinyls.js
 - Cart.js is the component that handles the cart page and loads all the items that are in ones cart
 - CartItem.js is a template for each record that is rendered inside Cart.js

## Built With
 - [Javascript](https://www.javascript.com/)
 - [React](https://reactjs.org/)
 - [Node.js](https://nodejs.org/en/)
 - [Cypress](https://www.cypress.io/)

## Author
Crivoi Andrei

contact: andrei.crivoi1997@gmail.com