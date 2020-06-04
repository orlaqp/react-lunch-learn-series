import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from '@p360/store';

import App from './app/app';

ReactDOM.render(
<Provider store={ store }>
    <App />
</Provider>
, document.getElementById('root'));
