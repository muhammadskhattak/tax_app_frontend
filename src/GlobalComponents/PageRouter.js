import React from 'react';
import { Route, BrowserRouter, Switch} from 'react-router-dom';
import App from '../App/App';
import Home from '../Home/Home';
import About from '../About/About';
import Team from '../Team/Team';
import PathNotFound from './PathNotFound';

const routing = (props) => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/team" component={Team} />
                    <Route component={PathNotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default routing