import img from "../../assets/About/img.png";
const About = () => {
  return (
    <div className="min-h-screen mb-5">
      <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-5 ">
        <div className="texts">
          <div className="first-texts">
            <h1 className="text-2xl font-bold">Introduction</h1>
            <p className="text-lg">
              Pokémon (short for "Pocket Monsters") is one of the most
              successful and enduring media franchises in history. Created by
              Satoshi Tajiri and developed by Game Freak, it was first
              introduced as a video game series for Nintendo’s Game Boy in 1996.
              Since then, Pokémon has expanded into anime, trading card games,
              movies, merchandise, and more, captivating millions of fans
              worldwide.
            </p>
          </div>
          <div className="second-texts">
            <h1 className="text-2xl font-bold">Concept & Gameplay</h1>
            <p className="text-lg">
              The core concept of Pokémon revolves around capturing, training,
              and battling fictional creatures known as Pokémon. Players take on
              the role of Pokémon Trainers who explore various regions,
              capturing Pokémon using Poké Balls and training them to become
              stronger through battles with other Trainers. Each Pokémon has
              unique abilities, types, and moves. The series follows a
              rock-paper-scissors-like mechanic where Pokémon types (e.g., Fire,
              Water, Grass) determine their strengths and weaknesses in battles.
              The ultimate goal in most Pokémon games is to defeat Gym Leaders,
              challenge the Elite Four, and become the Pokémon Champion.
            </p>
          </div>
          <div className="third-texts">
            <h1 className="text-2xl font-bold">Main Series Games</h1>
            <p className="text-lg">
              The Pokémon games are primarily role-playing games (RPGs), with
              turn-based battles and exploration mechanics. The main series
              consists of generations, each introducing new Pokémon, regions,
              and gameplay features. Some of the most notable games include:
            </p>
            <ul className="my-4">
              <li>
                <p>
                  <span className="font-semibold">
                    Pokémon Red & Blue (1996, 1998) –{" "}
                  </span>
                  The original games that started the franchise, set in the
                  Kanto region.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-semibold">
                    Pokémon Gold & Silver (1999, 2000) –{" "}
                  </span>
                  Introduced Johto, day-night cycles, and held items.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-semibold">
                    Pokémon Ruby & Sapphire (2002, 2003) –{" "}
                  </span>
                  Brought abilities, weather effects, and Double Battles.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-semibold">
                    Pokémon Diamond & Pearl (2006, 2007) –{" "}
                  </span>
                  Introduced online battles and trading via Wi-Fi.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-semibold">
                    Pokémon Black & White (2010, 2011) –{" "}
                  </span>
                  Featured a new region with a fresh set of Pokémon.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-semibold">Pokémon X & Y (2013) – </span>
                  First full 3D Pokémon game, introducing Mega Evolution.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-semibold">
                    Pokémon Sun & Moon (2016) –{" "}
                  </span>
                  Added regional variants and Z-Moves.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-semibold">
                    Pokémon Sword & Shield (2019) –{" "}
                  </span>
                  Brought open-world elements with the Wild Area.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-semibold">
                    Pokémon Scarlet & Violet (2022) –{" "}
                  </span>
                  Fully open-world Pokémon game with multiplayer exploration
                </p>
              </li>
            </ul>
            <p className="text-lg">
              There are also remakes like FireRed & LeafGreen, HeartGold &
              SoulSilver, and Brilliant Diamond & Shining Pearl that update
              classic games with modern features.
            </p>
          </div>
        </div>
        <img src={img} alt="Pokemon" />
      </div>
    </div>
  );
};

export default About;
