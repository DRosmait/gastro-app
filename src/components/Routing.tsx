import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import DishesPage from '../containers/DishesPage';
import Tables from '../containers/Tables';
import Contact from './Contact';
import ReviewPage from '../containers/ReviewPage';
import NotFound from './NotFound';

const Routing: React.FC = () => {
    return <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/menu" component={DishesPage} />
        <Route path="/tables" component={Tables} />
        <Route path="/contact" component={Contact} />
        <Route path="/reviews/:id" component={ReviewPage} />
        <Route component={NotFound} />
    </Switch>
};

export default Routing;