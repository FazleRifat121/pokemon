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
            <div className="badge badge-outline capitalize font-medium">
              {pokemon.types.map((curType) => curType.type.name).join(" , ")}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
