import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ManageStatus from './views/ManageStatus';
import AddPlayerView from './views/AddPlayerView';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/players/list" component={ManageStatus} />
                <Route exact path="/players/addplayer" component={AddPlayerView} />
                {/* ... other routes */}
            </Switch>
        </Router>
    );
}

export default App;
