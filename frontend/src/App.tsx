import React from "react";
import history from "./routes/history";
import {Router} from "react-router";
import Navbar from "./components/navbar/Navbar";
import Routes from "./routes/Routes";
import "./styles/global.scss"

const App = () => {
   return (
       <Router history={history}>
           <Navbar />
           <Routes />
       </Router>
   );
}

export default App;