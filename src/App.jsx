import React from "react";
import { useState } from "react";
import './App.css';
import FilmsList from "./components/FilmsList.jsx";
import Footer from "./components/Footer.jsx";

function App(props) {

    console.log(`---Begin Function App()---`);

    const [ list, setList ] = useState(["ready", "set", "GO"]);
    const [ text, setText ] = useState("");
    const [ errorTest, setErrorTest ] = React.useState(false);

    return(<div className="container">
            <div className="row">
              <div class="col-7 text-center my-center mt-3">
                <h1>React Life Cycle Methods Hooks</h1>
              </div>
            </div>
            <div className="row mt-3 my-center">
              <div className="col-5 my-center">
                <h5 className="text-center">Film Title - Director</h5>
                <FilmsList errTest={errorTest}></FilmsList>
              </div>
            </div>
            <Footer></Footer>
          </div>)
  }
export default App;