import React, { useEffect, useState } from "react";
import apiClient from "../services/api-service";

interface Games {
  id: number;
  name: string;
}

interface ArrayofGames {
  count: number;
  results: Games[];
}

const GameGrid = () => {
  const [GameArray, setGameArray] = useState<Games[]>([]);
  const [error, seterror] = useState("");

  useEffect(() => {
    apiClient
      .get<ArrayofGames>("/games")
      .then((res) => {
        setGameArray(res.data.results);
      })
      .catch((err) => seterror(err.message));
  });
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {GameArray.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
