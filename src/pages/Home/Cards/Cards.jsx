// Cards.jsx
import { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Card from "../../../components/Card/Card";
import Loading from "../../../components/Loading/Loading";

const Cards = () => {
  const [pokeData, setPokedata] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const API = "https://pokeapi.co/api/v2/pokemon?limit=680";
  const fetchData = async () => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const res = await fetch(API);
      const data = await res.json();

      const detailedPokemonData = data.results.map(async (curPokemon) => {
        const res = await fetch(curPokemon.url);
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await res.json();
        if (data.Response === false) {
          setErrorMessage("Failed to fetch");
          return;
        }

        return data;
      });
      const detailedPokemonResponse = await Promise.all(detailedPokemonData);
      setPokedata(detailedPokemonResponse);
      setIsLoading(false);
    } catch (err) {
      setErrorMessage(`Erro Message: ${err}`);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  //   search
  const searchData = pokeData.filter((curPokemon) =>
    curPokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  //pagination
  const totalPokemon = searchData.length;
  const pokemonPerPage = 33;
  const totalPage = Math.ceil(totalPokemon / pokemonPerPage);
  const startIndex = currentPage * pokemonPerPage;
  const endIndex = startIndex + pokemonPerPage;

  return (
    <div className="mt-5">
      <div className="flex justify-center items-center p-4">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div>
        {isLoading ? (
          <Loading></Loading>
        ) : errorMessage ? (
          <h3 className="text-red-500 text-5xl text-center">{errorMessage}</h3>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4 ">
            {searchData.slice(startIndex, endIndex).map((pokemon) => (
              <Card key={pokemon.id} pokemon={pokemon}></Card>
            ))}
          </div>
        )}
      </div>
      <div className="pagination flex justify-center items-center p-4 gap-5 overflow-x-scroll w-full">
        <button
          className="btn"
          onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
        >
          {"<"}
        </button>

        {[...Array(totalPage).keys()].map((page) => (
          <button
            key={page} // Adding a unique key for each button
            className={`btn ${
              page === currentPage ? "btn-primary" : ""
            } focus:btn-primary`}
            onClick={() => setCurrentPage(page)}
          >
            {page + 1} {/* Displaying pages starting from 1 instead of 0 */}
          </button>
        ))}

        <button
          className="btn"
          onClick={() =>
            setCurrentPage((prev) => Math.min(totalPage - 1, prev + 1))
          }
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Cards;
