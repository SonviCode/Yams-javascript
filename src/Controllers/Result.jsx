import React from "react";
import { useNavigate } from "react-router-dom";

const Result = ({ state, dispatch }) => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="container-result">
      <h1>Statistic</h1>

      <ul>
        <li>Nombre de double(s) paire(s) : <span>{state.doublePair}</span></li>
        <li>Nombre de brelan(s) : <span>{state.brelan}</span></li>
        <li>Nombre de full(s) : <span>{state.full}</span></li>
        <li>Nombre de carré(s) : <span>{state.edge}</span></li>
        <li>Nombre de lancé(s) : <span>{state.count}</span></li>
      </ul>

      <button className="result-btn" onClick={goToHome}>Home</button>
    </div>
  );
};

export default Result;
