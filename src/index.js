import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

Amplify.configure({
  Auth: {
    identityPoolId: process.env.AuthIdentityPoolId,
    region: process.env.AuthRegion
  },
  Interactions: {
    bots: {
      "OrderFlowers": {
        "name": "OrderFlowers",
        "alias": "$LATEST",
        "region": "us-west-2",
      },
    }
  }
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
