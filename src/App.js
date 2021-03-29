import React from "react";
import './App.css';
import Home from "./component/Home";
import Header from "./component/Header";
import Footer from "./component/footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./component/About";
import Gallery from "./component/Gallery";
import Single from "./component/Signle";
import Services from "./component/Services";
import Contect from "./component/Contect";

function App() {
  return (
    <div>
<Router>
       <Header/>
  <Switch>

    <Route exact path="/" component={Home}/>
    <Route  path="/About" component={About}/>
    <Route  path="/Gallery" component={Gallery}/>
    <Route  path="/Services" component={Services}/>
    <Route  path="/Single" component={Single}/>
    <Route  path="/Contect" component={Contect}/>
    
  
  </Switch>
     <Footer/>
</Router>
     
     
    </div>
  );
}

export default App;
