// PokemonDetails.jsx
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import Loading from "../Loading/Loading";
import BackButton from "./BackButton";

const CardDetails = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!response.ok) {
          throw new Error("Pokémon not found");
        }
        const data = await response.json();
        setPokemon(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPokemonDetails();
  }, [id]);

  if (isLoading) return <Loading />;
  if (error)
    return <div className="text-red-500 text-center mt-8">{error}</div>;
  if (!pokemon) return null;

  return (
    <div>
      <div className="lg:max-w-4xl max-w-full h-screen  mx-auto p-4 ">
        <BackButton></BackButton>
        <div className="card md:card-side bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={
                pokemon.sprites.other["official-artwork"].front_default ||
                pokemon.sprites.front_default
              }
              alt={pokemon.name}
              className="rounded-xl w-64"
            />
          </figure>
          <div className="card-body">
            <h1 className="card-title text-3xl capitalize py-5">
              {pokemon.name}
            </h1>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h2 className="font-bold">Height</h2>
                <p>{pokemon.height / 10}m</p>
              </div>
              <div>
                <h2 className="font-bold">Weight</h2>
                <p>{pokemon.weight / 10}kg</p>
              </div>
              <div>
                <h2 className="font-bold">Types</h2>
                <div>
                  {pokemon.types.map((t, index) => (
                    <div className="py-1 capitalize" key={index}>
                      {t.type.name === "grass" ? (
                        <p className="badge badge-success text-white">
                          {t.type.name}
                        </p>
                      ) : t.type.name === "fire" ? (
                        <p className="badge badge-warning text-white">
                          {t.type.name}
                        </p>
                      ) : t.type.name === "dark" ? (
                        <p className="badge badge-neutral text-white">
                          {t.type.name}
                        </p>
                      ) : t.type.name === "water" ? (
                        <p className="badge badge-info text-white">
                          {t.type.name}
                        </p>
                      ) : t.type.name === "poison" ? (
                        <p className="badge badge-primary text-white">
                          {t.type.name}
                        </p>
                      ) : t.type.name === "ice" ? (
                        <p className="badge badge-accent text-white">
                          {t.type.name}
                        </p>
                      ) : t.type.name === "fairy" ? (
                        <p className="badge badge-secondary text-white">
                          {t.type.name}
                        </p>
                      ) : t.type.name === "ground" ? (
                        <p className="badge bg-ground text-white">
                          {t.type.name}
                        </p>
                      ) : t.type.name === "electric" ? (
                        <p className="badge bg-yellow-400 text-white">
                          {t.type.name}
                        </p>
                      ) : t.type.name === "psychic" ? (
                        <p className="badge bg-violet-600 text-white">
                          {t.type.name}
                        </p>
                      ) : t.type.name === "fighting" ? (
                        <p className="badge bg-orange-500 text-white">
                          {t.type.name}
                        </p>
                      ) : t.type.name === "rock" ? (
                        <p className="badge bg-rock text-white">
                          {t.type.name}
                        </p>
                      ) : t.type.name === "stellar" ? (
                        <p className="badge bg-gray-300 text-black">
                          {t.type.name}
                        </p>
                      ) : t.type.name === "flying" ? (
                        <p className="badge bg-flying text-white">
                          {t.type.name}
                        </p>
                      ) : t.type.name === "steel" ? (
                        <p className="badge bg-gray-600 text-white">
                          {t.type.name}
                        </p>
                      ) : t.type.name === "bug" ? (
                        <p className="badge bg-green-700 text-white">
                          {t.type.name}
                        </p>
                      ) : t.type.name === "dragon" ? (
                        <p className="badge bg-amber-200 text-white">
                          {t.type.name}
                        </p>
                      ) : t.type.name === "ghost" ? (
                        <p className="badge bg-violet-400 text-white">
                          {t.type.name}
                        </p>
                      ) : (
                        <p className="badge badge-outline badge-neutra">
                          {" "}
                          {t.type.name}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="font-bold">Abilities</h2>
                <p>{pokemon.abilities.map((a) => a.ability.name).join(", ")}</p>
              </div>
              <div>
                <h2 className="font-bold">Stats</h2>
                <div>
                  {pokemon.stats.map((a, index) => (
                    <div className="flex items-center gap-2 " key={index}>
                      {a.stat.name === "hp" ? (
                        <h3 className="font-semibold capitalize text-red-500 ">
                          {a.stat.name}
                        </h3>
                      ) : a.stat.name === "attack" ? (
                        <h3 className="font-semibold capitalize text-[#F3AE77]">
                          {a.stat.name}
                        </h3>
                      ) : a.stat.name === "defense" ? (
                        <h3 className="font-semibold capitalize text-yellow-400">
                          {a.stat.name}
                        </h3>
                      ) : a.stat.name === "special-attack" ? (
                        <h3 className="font-semibold capitalize text-blue-400">
                          {a.stat.name}
                        </h3>
                      ) : a.stat.name === "special-defense" ? (
                        <h3 className="font-semibold capitalize text-green-400">
                          {a.stat.name}
                        </h3>
                      ) : a.stat.name === "speed" ? (
                        <h3 className="font-semibold capitalize text-pink-400">
                          {a.stat.name}
                        </h3>
                      ) : (
                        <h3 className="font-semibold capitalize ">
                          {a.stat.name}
                        </h3>
                      )}
                      <p>{a.base_stat}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
