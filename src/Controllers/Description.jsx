import React from "react";
import { useNavigate } from "react-router-dom";

const Description = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Description du jeu</h1>

      <p style={{padding : "40px 0"}}>
        Le Yams se joue avec 5 dés et se finit une fois toutes les cases de la
        fiche de score remplies. Chaque joueur joue tout à tour et dispose de 3
        lancers à chaque coup. L’objectif étant de réaliser des combinaisons qui
        rapportent des points. Le joueur a le choix de reprendre tous ou une
        partie des dés à chaque lancé, selon son gré, pour tenter d’obtenir la
        combinaison voulue. A chaque tour, le joueur doit obligatoirement
        inscrire son score dans une des cases de la feuille de marque que ce
        soit par un X ou par les points qu’il a obtenu. Il peut arriver lors
        d’un tour que le résultat ne convienne pas au joueur et qu’il se dise
        qu’il pourrait faire un plus grand score sur un autre tour. Il peut
        alors choisir de barrer une autre case à la place. Bien entendu, il ne
        pourra plus faire cette combinaison par la suite. Lorsque le total
        intermédiaire est égal ou supérieur à 63 points, un bonus de 35 points
        supplémentaires est accordé, ce qui peut faire la différence au décompte
        final. Soyez donc stratégique !
      </p>

      <button className="result-btn" onClick={goToHome}>
        Home
      </button>
    </div>
  );
};

export default Description;
