import React from 'react';
import './App.css';
import { createBrowserHistory } from 'history';
import NjoyApplication from './components/NjoyContainer/component';

const App = () => {
    const history = createBrowserHistory();
    return <NjoyApplication history={history} />;
};

export default App;
