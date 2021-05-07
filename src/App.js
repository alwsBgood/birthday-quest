import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

import WelcomeScreen from "./pages/WelcomeScreen";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Step3 from "./pages/Step3";
import Step4 from "./pages/Step4";
import Step5 from "./pages/Step5";

export default function App() {
  return (
      <div className="App">
          <Router>
              <Switch>
                  <Route path="/birthday-quest" children={<WelcomeScreen />}/>
                  <Route path="/df9ef054-83e0-44da-8f8f-dc571c840378" children={<Step1 />}/>
                  <Route path="/e6394ca4-b004-4907-a37b-20787ff40d0d" children={<Step2 />}/>
                  <Route path="/fe69d4ce-586a-443c-8935-188060d9423e" children={<Step3 />}/>
                  <Route path="/2fa20e38-af2d-11eb-8529-0242ac130003" children={<Step4 />}/>
                  <Route path="/3f21bdc2-af2d-11eb-8529-0242fdf31425" children={<Step5 />}/>

              </Switch>
          </Router>
      </div>
  );
}
