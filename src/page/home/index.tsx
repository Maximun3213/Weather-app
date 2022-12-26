import axios from "axios";
import { useEffect } from "react";
import "./style.scss";
import React from "react";

function HomePage() {
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}`)
      .then((res) => console.log(res));
  }, []);
  return (
    <React.Fragment>
      <div className="d-grid">
        <div className="row" style={{ paddingTop: "5%" }}>
          <div className="col-8">
            <div className="d-grid">
              <div className="row">
                <div className="col-12">
                  <div className="d-flex justify-content-between w-full">
                    <div className="text-primary-color">
                      <h2 style={{ margin: 0 }}>Good afternoon, Max</h2>
                      <p
                        className="text-secondary-color"
                        style={{ margin: 0, fontWeight: 100, fontSize: "14px" }}
                      >
                        Have a nice day
                      </p>
                    </div>
                    <div className="text-primary-color">
                      <h1
                        style={{ margin: 0, fontWeight: 100, fontSize: "50px" }}
                      >
                        8:20 PM
                      </h1>
                      <p
                        className="text-secondary-color"
                        style={{ margin: 0, fontWeight: 100, fontSize: "14px" }}
                      >
                        Monday, 03 May 2022
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-12">
                    <div className="weather_section">
                        hello
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">Hello</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HomePage;
