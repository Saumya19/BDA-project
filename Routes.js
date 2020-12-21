import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Update from './containers/Update';
import Insert from './containers/Insert';
import Delete from './containers/Delete';
import Read from './containers/Read';
import Search from './containers/Search';



import NotFound from './containers/NotFound';

export default () => (
	<Switch>
		<Route path="/" exact component={Home} />
		<Route path="/insert" exact component={Insert} />
		<Route path="/update" exact component={Update} />
		<Route path="/delete" exact component={Delete} />
		<Route path="/create" exact component={Read} />
		<Route path="/search" exact component={Search} />
		{/* Finally, catch all unmatched routes */}
		<Route component={NotFound} />
	</Switch>
);