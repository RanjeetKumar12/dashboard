# graveyard-dashboard

The dashboard for the Graveyard Discord bot.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup

Install dependencies:

```
npm install
```

Setup the [backend server](https://github.com/Graveyard-Dev/graveyard-dashboard-api).

Edit the environment variables in `.env`:

| VARIABLE | DESCRIPTION |
| :-- | :-- |
| `REACT_APP_DASHBOARD_API` | The backend API server or [proxy server](https://github.com/Graveyard-Dev/graveyard-dashboard-proxy) URL. |
| `REACT_APP_CLIENT_ID` | The Discord application's client ID. |


## Run the app locally

In the project directory, you can run:

```
npm start
```

This runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Build

```
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
