import { useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Description from "./Controllers/Description";
import Home from "./Controllers/Home";
import Nav from "./Controllers/Nav";
import Result from "./Controllers/Result";
import reducer from "./reducers/reducer";
import "./style/index.scss";

const initialState = { count: 1, result: [], brelan: 0, edge: 0, full: 0, doublePair: 0 };

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<Home state={state} dispatch={dispatch} />}
          ></Route>
          <Route
            path="/description"
            element={<Description state={state} dispatch={dispatch} />}
          ></Route>
          <Route
            path="/result/:id"
            element={<Result state={state} dispatch={dispatch} />}
          ></Route>
          <Route
            path="/*"
            element={<Home state={state} dispatch={dispatch} />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
