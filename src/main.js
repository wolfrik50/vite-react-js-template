import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';
import AppWrapper from './components/AppWrapper';

import './global.css';

const root = document.getElementById('root');
const app = React.createElement(App);
const appWrapper = React.createElement(AppWrapper, null, app);

ReactDOM
    .createRoot(root)
    .render(appWrapper);