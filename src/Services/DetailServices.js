import axios from "axios";

function getPokemonById(id) {
  return axios.get("https://pokeapi.co/api/v2/pokemon-species/" + id);
}
function getPokemonById2(id) {
  return axios.get("https://pokeapi.co/api/v2/pokemon/" + id);
}

function getPokemonById3(id) {
  return axios.get("https://pokeapi.co/api/v2/type/" + id);
}


export default {
  getPokemonById,
  getPokemonById2,
  getPokemonById3,
};
