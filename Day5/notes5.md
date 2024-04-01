# Day 5

npx create-react-app name --template typescript

npm start

webpack-dependencies

    "webpack-cli": "^5.1.0",
    "webpack-merge": "^5.10.0",
    "html-webpack-plugin": "^5.5.0",
    "ts-loader": "^9.1.2"

webpack-scripts

    "start": "webpack serve",
    "build": " webpack --mode production",

webpack.config.js
remote for mfe

tsconfig.json noimit to false

update container 

add remotecomponents.ds.ts

    "isolatedModules": false,




## valid use of useRef (mount)


## MFEs


1. allowing you to re-render a child when the parent state changes (want to limit that but would be good for a login/logout)
- the function the child is going to return is going to be fired when
-- ideal to start with on 
- function from the parent is going to be handling state

* in the parent, we are managing the user state 


in react-mfes\05\payments-ui


