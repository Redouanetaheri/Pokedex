
import { useEffect, useState } from "react";
import PokemonServices from "../Services/PokemonServices";
import PokeCard from "../Components/PokeCard";
import Pagination from "react-bootstrap/Pagination";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";


const HomePage = () => {
  const [Pokemon, setPokemon] = useState([]);
  const limit = 3000;
  const [page, setPage] = useState (1);
  const [totalPokemons, setTotalPokemons] = useState(0);
  const [searchValue, setSearchValue] = useState("");
    const [filteredPokemon, setFilteredPokemon] = useState ([]); 

    const handleChange = (event) => {
        setSearchValue(event.currentTarget.value);
    } 
  

  const FetchPokemon = async () => {
    try {
      const offset = (page -1) * limit;
      const response = await PokemonServices.getAllPokemon(offset,limit);
      console.log(response.data.results);
      setPokemon(response.data.results);
      setTotalPokemons(response.data.count)
      
      console.log();
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchPokemon();
  }, [page]);

  useEffect(() => {
    setFilteredPokemon(Pokemon.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(searchValue.toLowerCase());              
    }))
}, [searchValue, Pokemon])


  
  return (
    <>
      <h1 className="d-flex justify-content-center gap-3 mt-5 mb-5">Bienvenue dans le monde PoKémon</h1>
      <Form.Label htmlFor="inputPassword5">Recherche</Form.Label>
      <Form.Control
        type="text"
        id="search"
        aria-describedby="Search"
        placeholder="ex : Pikachu"
        className="mb-3"
        value={searchValue}
        onChange={handleChange}
        
        
      />
      <Button variant="primary" className="col-12 mb-5" >Recherche</Button>
      <div className="d-flex justify-content-center flex-wrap gap-3">
      {filteredPokemon.map((pokemon) => {
        return <PokeCard PokeCard={pokemon} key={pokemon.name}></PokeCard>;
      })}
      </div>
     
      
    </>
  );
};

export default HomePage;
