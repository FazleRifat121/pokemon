import { Link } from "react-router";

const Card = ({ pokemon }) => {
  return (
    <div>
      <Link
        to={`/pokemon/${pokemon.id}`}
        className="hover:scale-105 transition-transform"
      >
        <div className="card bg-base-100 lg:w-96 w-full shadow-sm ">
          <figure className="px-10 pt-10">
            <img
              src={pokemon.sprites.front_default}
              alt="Shoes"
              className="rounded-xl w-40"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title capitalize">{pokemon.name}</h2>
          </div>
          <div className="card-actions justify-center mb-5">
            <div className="flex items-center justify-center gap-2 capitalize">
              {pokemon.types.map((t, index) => (
                <div key={index}>
                  {t.type.name === "grass" ? (
                    <p className="badge badge-success text-white ">
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
                    <p className="badge badge-info text-white">{t.type.name}</p>
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
                    <p className="badge bg-ground text-white">{t.type.name}</p>
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
                    <p className="badge bg-rock text-white">{t.type.name}</p>
                  ) : t.type.name === "stellar" ? (
                    <p className="badge bg-gray-300 text-black">
                      {t.type.name}
                    </p>
                  ) : t.type.name === "flying" ? (
                    <p className="badge bg-flying text-white">{t.type.name}</p>
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
                    <p>{t.type.name}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
