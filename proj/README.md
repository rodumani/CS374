# Nanomario

## Introduction
This project is KAIST 2017 Spring CS374 Intro to HCI Design Project of team Nanomario.

## Preparation
Install dependencies:
```bash
$ npm install
```

Run development server:
```bash
$ npm run dev
```
Then, open http://localhost:4000 on browser

Build for production:
```bash
$ npm run build
```

To lint code:
```bash
$ npm run lint
```

To Deploy:
```bash
$ firebase deploy
```
Before deploy, you should login firebase with `firebase login`

## Dependencies 
- vue.js
- vuex
- vue-router
- vee-validate
- element-ui
- bootstrap v4
- moment
- firebase

- babel
- webpack

## Structure
 - client/: web app codes
    - components/
        - vue components
    - router/
        - index.js: routing with vue-router
    - store/
        - index.js: vuex state store
    - app.js: main JavaScript file containing root vue component
    - firebase.js: functions related to firebase api call
    - index.js: webpack build endpoint
 - /static: static files (Ex: Images, favicon)
