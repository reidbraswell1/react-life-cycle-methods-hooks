import React from "react";
import './App.css';
import FilmsList from "./components/FilmsList.jsx"

function App(props) {

    console.log(`---Begin Function App()---`);

    const [ list, setList ] = React.useState(["ready", "set", "GO"]);
    const [ text, setText ] = React.useState("");
    const [ errorTest, setErrorTest ] = React.useState(false);

    return(<div className="container">
            <div className="row">
              <div class="col-6 text-center my-center mt-3">
                <h1>React Life Cycle Methods Hooks</h1>
              </div>
            </div>
            <div className="row mt-3 my-center">
              <div className="col-5 my-center">
                <h5 className="text-center">Film Title - Director</h5>
                <FilmsList errTest={errorTest}></FilmsList>
              </div>
            </div>
            <div className="row mt-3">
              <footer className="col-5 my-center footer">
                <p>Life Cycle Methods Exercise 9/22</p>
              </footer>
            </div>

          </div>)
  }
export default App;