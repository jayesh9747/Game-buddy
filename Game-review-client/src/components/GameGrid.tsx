import useGames from "../hooks/useGame";
interface Games {
  id: number;
  name: string;
}

interface ArrayofGames {
  count: number;
  results: Games[];
}

const GameGrid = () => {
  const { error, GameArray } = useGames();
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
