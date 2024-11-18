import { useEffect, useState } from "react";
import PokemonServices from "../Services/PokemonServices";
import PokeCard from "../Components/PokeCard";

const HomePage = () => {
  const [Pokemon, setPokemon] = useState([]);

  const FetchPokemon = async () => {
    try {
      const response = await PokemonServices.getAllPokemon();
      console.log(response.data.results);
      setPokemon(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchPokemon();
  }, []);

  return (
    <>
      <h1 className="d-flex justify-content-center gap-3">Page accueil</h1>
      <div className="d-flex justify-content-center flex-wrap gap-3">
      {Pokemon.map((pokemon) => {
        return <PokeCard PokeCard={pokemon} key={pokemon.name}></PokeCard>;
      })}
      </div>
    </>
  );
};

export default HomePage;
