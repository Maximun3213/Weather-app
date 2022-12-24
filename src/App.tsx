import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./router";
import Header from "./components/header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          {
            routes.map((item, index)=>{
              return (
                <Route
                  key={index}
                  path={item.path}
                  element={item.element}
                />
              );
            })
          }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
