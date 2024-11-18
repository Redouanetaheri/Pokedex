import { useParams } from "react-router-dom";
import PokemonServices from "../Services/PokemonServices";
import { useEffect, useState } from "react";
import PokeCard from "../Components/PokeCard";
import DetailServices from "../Services/DetailServices";

const PokemonDetailsPage = () => {
    const {id} = useParams();
    const [details, setDetails] = useState({});


    const FetchPokemonById = async () =>{
      try {
        const response = await DetailServices.getPokemonById(id);
        console.log(response.data);
        setDetails(response.data);
        
      } catch (error) {
        console.log(error);
        
      }                 
    }

    const FetchPokemonById2 = async () =>{
        try {
          const response = await DetailServices.getPokemonById2(id);
          console.log(response.data);
          setDetails(response.data);
          
        } catch (error) {
          console.log(error);
          
        }                 
      }

    useEffect(() =>{
        FetchPokemonById();FetchPokemonById2();
    },[])
    return <>

<h1>details</h1>
<h1>{details.id}</h1>
<div className="d-flex justify-content-center flex-wrap gap-3">
    <img src={"https://img.pokemondb.net/artwork/" + details.name + ".jpg"} />

    
    <h2>Types</h2>
            <ul>
                {details.types && details.types.map((type, index) => {
                    return <li key={index}>{type.type.name}</li>
                })}
            </ul>
            <h2>Stats</h2>
            <ul>
                {details.stats && details.stats.map((stat, index) => {
                    return <li key={index}>{stat.stat.name} : {stat.base_stat}</li>
                })}
            </ul>
    </div>
    
    </>;
}
 
export default PokemonDetailsPage;