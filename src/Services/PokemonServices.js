import axios from "axios";

function getAllPokemon(id) {
  return axios.get("https://pokeapi.co/api/v2/pokemon/");
}

export default {
  getAllPokemon,
};
