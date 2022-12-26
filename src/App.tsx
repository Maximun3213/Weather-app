import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./router";
import Header from "./components/header";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className="body_wapper">
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
      </div>
    </Router>
  );
}

export default App;
