import axios from "axios";

function getPokemonType() {
  return axios.get("https://pokeapi.co/api/v2/type");
}
function getPokemonByTypes(type) {
    return axios.get("https://pokeapi.co/api/v2/type/" + type);
  }

export default {
  getPokemonType,
  getPokemonByTypes
};