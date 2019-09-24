import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Menu from './Menu';
import Tables from '../containers/Tables';
import Contact from './Contact';
import NotFound from './NotFound';

const Routing: React.FC = () => {
    return <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/menu" component={Menu} />
        <Route path="/tables" component={Tables} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
    </Switch>
}

export default Routing;