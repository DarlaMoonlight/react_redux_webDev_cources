import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Lesson from "./02_components/Lesson";
import CounterButton from "./03_state/Lesson";

ReactDOM.render(<CounterButton />, document.getElementById('root'));
registerServiceWorker();
