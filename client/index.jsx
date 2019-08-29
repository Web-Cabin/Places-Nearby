import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx'; 
import WebFont from 'webfontloader';

WebFont.load({
    google: {
      families: ['Nunito Sans:400,500,600,700,800,900', 'Montserrat:400,500,600,700,800'],
    },
  });

ReactDOM.render(<App />, document.getElementById('app'));
