import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
    return (
        <div>
            PageOne
            <Link to='/page'>Link to Page Two</Link>
        </div>
    );
};

const PageTwo = () => {
    return (
        <div>
            PageTwo
            <Link to='/'>Link to Page One</Link>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Route path='/' component={PageOne} />
                <Route path='/page' component={PageTwo} />
            </BrowserRouter>
        </div>
    );
};

export default App;
