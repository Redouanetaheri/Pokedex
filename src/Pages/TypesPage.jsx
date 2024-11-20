import { useEffect, useState } from "react";
import TypesServices from "../Services/TypesServices";
import { useParams } from "react-router-dom";


const PokemonByType = () => {
    const { type } = useParams();
    const [pokemonType, setPokemonType] = useState([]);

    const fetchPokemonByType = async () => {
        try {
             const response = await TypesServices.getPokemonByTypes(type);
             console.log(response.data);
             setPokemonType(response.data)
        } catch (error) {
            console.log(error);
            
        }
    };

    useEffect(() => {
        fetchPokemonByType();
    }, [type]);
    



    return <>

    <h1 className="d-flex justify-content-center mt-3">Pokémon de type {type.charAt(0).toUpperCase() + type.slice(1)}</h1>
    
    
    </>;
}
 
export default PokemonByType;
// import { useEffect, useState } from "react";
// import TypesServices from "../Services/TypesServices";
// import { useParams } from "react-router-dom";

// const PokemonByType = () => {
//   const { type } = useParams(); // Récupère le type depuis l'URL
//   const [pokemonType, setPokemonType] = useState([]); // État pour stocker les Pokémon

//   // Fonction pour récupérer les Pokémon par type
//   const fetchPokemonByType = async () => {
//     try {
//       const response = await TypesServices.getPokemonType(type); // Appel API
//       setPokemonType(response.data.pokemon); // Mets à jour l'état avec les Pokémon
//     } catch (error) {
//       console.log("Erreur lors de la récupération des types :", error);
//     }
//   };

//   // Appel de la fonction lors du montage ou lorsque `type` change
//   useEffect(() => {
//     fetchPokemonByType();
//   }, [type]); // Ajout de `type` comme dépendance

//   return (
//     <div>
//       <h1>Pokémon de type : {type}</h1>
//       <ul>
//         {pokemonType.length > 0 ? (
//           pokemonType.map((pokemon, index) => (
//             <li key={index}>
//               {pokemon.pokemon.name.charAt(0).toUpperCase() + pokemon.pokemon.name.slice(1)}
//             </li>
//           ))
//         ) : (
//           <p>Chargement ou aucun Pokémon trouvé...</p>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default PokemonByType;