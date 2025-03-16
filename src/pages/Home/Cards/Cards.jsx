// Cards.jsx
import { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Card from "../../../components/Card/Card";
import Loading from "../../../components/Loading/Loading";

const Cards = () => {
  const [pokeData, setPokedata] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const API = "https://pokeapi.co/api/v2/pokemon?limit=24";
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(API);
      const data = await res.json();

      const detailedPokemonData = data.results.map(async (curPokemon) => {
        const res = await fetch(curPokemon.url);
        const data = await res.json();
        return data;
      });
      const detailedPokemonResponse = await Promise.all(detailedPokemonData);
      setPokedata(detailedPokemonResponse);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mt-5">
      <div className="flex justify-center items-center p-4">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div>
        {isLoading ? (
          <Loading></Loading>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4 ">
            {pokeData.map((pokemon) => (
              <Card key={pokemon.id} pokemon={pokemon}></Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
