import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from '../MainRouter';
const App = () => {
return (
<Router>
<MainRouter />
</Router>
);
};
export default App;

{/* Main App.jsx file, uses Router to navigate through the pages */}