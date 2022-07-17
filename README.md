# TODO LIST

Simple todo list in js and node.

## Installation

The front is write in HTML + Javascript. But I choose to use Parcel to split the project in multiple files and use SCSS.
Parcel will handle the compilation of all the files into an usable web application.
So you will need to install some dependencies.

### List of dependencies

#### For development

- [Parcel JS](https://parceljs.org)
- [Nodemon](https://nodemon.io)
- [eslint](https://eslint.org)

#### For application

- [Express](https://expressjs.com)
- [Cors](https://expressjs.com/en/resources/middleware/cors.html)

### Install the dependencies

Use npm or yarn to install all the needed modules.

```node
yarn install
```

or

```node
npm install
```

## Usage

I add source and scripts in package.json files so you can use simple commande to start the project.

### Start the front-end (With Parcel)

This commande will start a development server to work on.

```node
yarn start
```

or

```node
npm start
```

### Start the back-end (With Nodemon)

This commande will start the node server with nodemon restarting the server at each change.

```node
yarn serve
```

or

```node
npm run serve
```
