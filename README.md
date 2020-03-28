# React-Offline-First

This is a fully working example of ReactJS for working in offline mode. This repository is to get you started with the development of your application right away without worrying about the basic configurations. It provides you with the following packages out of the box.

- [Redux](https://redux.js.org/)
- [ReactStrap](https://reactstrap.github.io/)
- [Redux-Thunk](https://github.com/reduxjs/redux-thunk)
- [Lodash](https://lodash.com/)
- [Font Awesome](https://fontawesome.com/)
- [Documentation](https://docs.npmjs.com/)
- [Axios](https://github.com/axios/axios)

Complete configuration of redux store for offline mode is also present, you need not to worry for that.

# Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.

# Prerequisites

What things you need to install the software and how to install them

```
Git & NPM or Yarn installed on your local machine
```

# Installation

A step by step series of examples that tell you how to get a development env running

```

$ git clone https://github.com/mansern/offline-first-demo.git
$ npm install && npm start

```

# Folder Structure

    .
    ├── public                  # Containing HTMl and Mainfest file
    ├── src                     # Source Root
    │   ├── assets              # Static Assets CSS & SCSS
    │   └── containers          # Containers where data fetching will be done
    │   └── images              # Images are placed here
    |   └── redux               # Global Redux files
    │   └── index.js            # Applications Entry Point.
    └── ...                     #etc

## Documentation

```
Package we are using requires global installation which every developer must do.
npm install -g documentation

# generate html docs for all files in src
Usage :: documentation build src/** -f html -o docs
# This command will create a docs folder and will generate the HTML docs of all components inside the "src" folder.
# Usage example is in containers/project/home

Available format options :: HTML, Markdown, JSON

```

## HTTP Server

```
Command line HTTP server is also installed if you want offline testing. It serves the build folder for actual
production testing. You simply have to do:

- npm run build
- npm run start-sw

```

# Built With

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [ReactStrap](https://reactstrap.github.io/)
- [Create React App](https://github.com/facebook/create-react-app)

# Authors

- Muhammad Anser Naseer (muhammadin87@gmail.com)
