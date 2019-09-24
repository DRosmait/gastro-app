import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom'

import configureStore from './store';
import Navigation from './components/Navigation';
import Routing from './components/Routing';

import './App.css';

const store = configureStore();

const App: React.FC = () => {
    return <div>
        <Provider store={store} >
            <Router>
                <Navigation />
                <Routing />
            </Router>
        </Provider>
    </div>
};

export default App;
