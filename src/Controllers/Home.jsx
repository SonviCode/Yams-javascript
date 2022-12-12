import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ state, dispatch }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "reset" });

    alert("dés lancé !")

    const numberThrow = e.target.elements.number.value;
    const numberChance = [];
    let counts = {};

    // console.log(typeof(numberThrow));
    // if(numberThrow === Number){
    //     alert('Il faut un nombre !');
    //     return;
    // }
    for (let i = 0; i < numberThrow; i++) {
      const oneChance = [];

      for (let i = 0; i < 5; i++) {
        oneChance.push(Math.floor(Math.random() * 6 + 1));
      }

      for (let i = 0; i < oneChance.length; i++) {
        let num = oneChance[i];
        counts[num] = counts[num] ? counts[num] + 1 : 1;
      }

      Object.values(counts).forEach((el) => {
        if (el == 3) {
          dispatch({ type: "brelan" });
        } else if (el == 4) {
          dispatch({ type: "edge" });
        }
      });

      if (
        Object.values(counts).includes(3) &&
        Object.values(counts).includes(2)
      ) {
        dispatch({ type: "full" });
      } else if (
        Object.values(counts).includes(2) &&
        Object.values(counts).includes(2)
      ) {
        dispatch({ type: "double-pair" });
      }
      numberChance.push(counts);
      counts = {};
    }

    console.log(numberChance);

    dispatch({ type: "count", value: numberThrow });
    dispatch({ type: "result", value: numberChance });
  };

  const goToResult = () => {
    navigate(`/result/${state.count}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="number">Nombre de lancée(s) de dés :</label>
          <input type="text" id="number" defaultValue={1} />
        </div>

        <button>Lancer les dés</button>
      </form>

      {state.result.length > 0 ? (
        <button className="result-btn" onClick={goToResult}>
          Résultat
        </button>
      ) : (
        ""
      )}
    </>
  );
};

export default Home;
