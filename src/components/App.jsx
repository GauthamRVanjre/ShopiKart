import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import SignUp from "./SignUp.jsx";
import SignIn from "./SignIn.jsx";
import Forgotpass from "./Forgotpass.jsx";
import Home from "./Home.jsx";

function App() {
    return (

        <Router>
            <div>
                <Header />
                <div>
                    <Switch>
                        <Route exact path="/">
                            <SignUp />
                        </Route>
                        <Route path="/SignIn">
                            <SignIn />
                        </Route>
                        <Route path="/Forgotpass">
                            <Forgotpass />
                        </Route>
                        <Route path="/Home">
                            <Home />
                        </Route>
                    </Switch>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
