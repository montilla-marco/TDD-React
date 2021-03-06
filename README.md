 npm i -D enzyme jest-enzyme enzyme-adapter-react-16

La sabiduría no es producto de la escolarización, sino del intento de adquirirla durante toda la vida.  

 ### Test must be easy to maintain
 You must test behavior (what the app should do) instead test implementation(How it works).  
 Ideally not want to rewrite test after a refactor, if the implementation changes, test remain the same.  
 Testing implementation is brittle(easily broken when app still works).

 .1 Set initial state.  
 .2 Simulate changes on initial state.  
 .3 check if the state change responds to your expectations.  

 ### Unit Testing
 Granular testing leads to.  
 Brittle test.  
 ### Integration test
 More robust test.  
 More difficult to find out what cause failure.  

  https://github.com/flyrightsister/udemy-react-testing-projects


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Jest 
Jest is a delightful JavaScript Testing Framework with a focus on simplicity.  
It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more.  
https://jestjs.io/en/  

## Enzyme
Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output. It was developed at Airbnb and later transferred to an independent organization.  

Enzyme's API is meant to be intuitive and flexible by mimicking jQuery's API for DOM manipulation and traversal.  

Enzyme is unopinionated regarding which test runner or assertion library you use, and should be compatible with all major test runners and assertion libraries out there. The documentation and examples for enzyme use mocha and chai, but you should be able to extrapolate to your framework of choice.  


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
