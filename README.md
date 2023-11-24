# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

This is a website which renders the Json UI Schema and convert it into a Form. Test the application by copy pasting the following Json schema in the text field given on the left of the application:


[
    {
      "sort": 1,
      "label": "Pasta Name",
      "description": "",
      "validate": {
        "required": true,
        "immutable": false
      },
      "jsonKey": "name",
      "uiType": "Input",
      "icon": "",
      "level": 0,
      "placeholder": ""
    },
    {
      "sort": 10001,
      "label": "Pasta_type",
      "description": "",
      "validate": {
        "required": true,
        "immutable": false
      },
      "jsonKey": "pasta_type",
      "uiType": "Group",
      "icon": "",
      "level": 0,
      "placeholder": "",
      "subParameters": [
        {
          "sort": 1,
          "label": "Sauce",
          "description": "",
          "validate": {
            "required": true,
            "options": [
              {
                "label": "Red",
                "value": "Red",
                "description": "",
                "icon": ""
              },
              {
                "label": "White",
                "value": "White",
                "description": "",
                "icon": ""
              },
              {
                "label": "Pesto",
                "value": "Pesto",
                "description": "",
                "icon": ""
              }
            ],
            "defaultValue": "Red",
            "immutable": false
          },
          "jsonKey": "sauce",
          "uiType": "Select",
          "icon": "",
          "level": 1,
          "placeholder": ""
        },
        {
          "sort": 3,
          "label": "Topping_type",
          "description": "",
          "validate": {
            "required": true,
            "options": [
              {
                "label": "Veg",
                "value": "Veg",
                "description": "",
                "icon": ""
              },
              {
                "label": "Mushroom",
                "value": "Mushroom",
                "description": "",
                "icon": ""
              },
              {
                "label": "Chicken",
                "value": "Chicken",
                "description": "",
                "icon": ""
              },
              {
                "label": "Prawns",
                "value": "Prawns",
                "description": "",
                "icon": ""
              }
            ],
            "defaultValue": "Veg",
            "immutable": false
          },
          "jsonKey": "topping_type",
          "uiType": "Select",
          "icon": "",
          "level": 1,
          "placeholder": ""
        },
        {
          "sort": 5,
          "label": "Cheese",
          "description": "",
          "validate": {
            "options": [
              {
                "label": "Cheddar",
                "value": "Cheddar",
                "description": "",
                "icon": ""
              },
              {
                "label": "Mozzarella",
                "value": "Mozzarella",
                "description": "",
                "icon": ""
              },
              {
                "label": "Parmesan",
                "value": "Parmesan",
                "description": "",
                "icon": ""
              },
              {
                "label": "Feta",
                "value": "Feta",
                "description": "",
                "icon": ""
              },
              {
                "label": "Gouda",
                "value": "Gouda",
                "description": "",
                "icon": ""
              }
            ],
            "defaultValue": "Cheddar",
            "immutable": false
          },
          "jsonKey": "cheese",
          "uiType": "Select",
          "icon": "",
          "level": 1,
          "placeholder": ""
        }
      ]
    },
    {
      "sort": 10002,
      "label": "Portion",
      "description": "",
      "validate": {
        "options": [
          {
            "label": "Medium",
            "value": "Medium",
            "description": "",
            "icon": ""
          },
          {
            "label": "Small",
            "value": "Small",
            "description": "",
            "icon": ""
          },
          {
            "label": "Large",
            "value": "Large",
            "description": "",
            "icon": ""
          }
        ],
        "defaultValue": "Medium",
        "immutable": false
      },
      "jsonKey": "portion",
      "uiType": "Select",
      "icon": "",
      "level": 0,
      "placeholder": ""
    }
]
