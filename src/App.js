import React from 'react';
//import Amplify, { Interactions } from 'aws-amplify';
import { ChatBot, AmplifyTheme } from 'aws-amplify-react';
//import logo from './logo.svg';
//import './App.css';

const myTheme = {
  ...AmplifyTheme,
  sectionHeader: {
    ...AmplifyTheme.sectionHeader,
    backgroundColor: '#ff6600'
  }
};

function handleComplete(err, confirmation) {
  if (err) {
    alert('Bot conversation failed')
    return;
  }

  alert('Success: ' + JSON.stringify(confirmation, null, 2));
  return 'Flowers ordered. Thank you! what would you like to do next?';
}

function App() {
  return (
    <div className="App">
      <ChatBot
          title="OrderFlowers Bot"
          theme={myTheme}
          botName="OrderFlowers"
          welcomeMessage="Welcome, how can I help you today?"
          onComplete={handleComplete}
          clearOnComplete={true}
          conversationModeOn={true}
          voiceEnabled={true}
      />
    </div>
  );
}

export default App;
