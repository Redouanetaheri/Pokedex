import { useParams } from "react-router-dom";
import PokemonServices from "../Services/PokemonServices";
import { useEffect, useState } from "react";
import PokeCard from "../Components/PokeCard";
import DetailServices from "../Services/DetailServices";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import CanvasJSReact from '@canvasjs/react-charts';



const PokemonDetailsPage = () => {
  var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const {id} = useParams();
    const [details, setDetails] = useState({});
    const capitalizeFirstLetter = (string) => {
      if (!string) return ""; // Vérifie si la chaîne existe
      return string.charAt(0).toUpperCase() + string.slice(1);
    };
    const statistique =
    details.stats?.map((stat) => ({
      label: capitalizeFirstLetter(stat.stat.name), // Nom de la statistique
      y: stat.base_stat, // Valeur de la statistique
    })) || [];
    const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light1", // "light1", "dark1", "dark2"
			title:{
				text: "Statistiques"
			},
			data: [{
				type: "pie",
				indexLabel: "{label}: {y} ",		
				startAngle: -90,
				dataPoints: statistique
			}]
		}


    const FetchPokemonById = async () =>{
      try {
        const response = await DetailServices.getPokemonById(id);
        const response2 = await DetailServices.getPokemonById2(id);
        const response3 = await DetailServices.getPokemonById3(response2.data.types[0].type.name);
      
        setDetails({...response3.data, ...response.data, ...response2.data});
        
      } catch (error) {
        console.log(error);
        
      }                 
    }

    useEffect(() =>{
        FetchPokemonById();
    },[])

    let flavorText = "";
    if (details.flavor_text_entries) {
        const frenchFlavor = details.flavor_text_entries.find(entry => entry.language.name === "fr");
        if (frenchFlavor) {
            flavorText = frenchFlavor.flavor_text;
        } else {
            flavorText = "Aucune description en français disponible.";
        }
    }
    console.log(details);

    
    return <> <Container      >


<h1>{details.name} N°{details.id}</h1>
<div className="d-flex justify-content-center flex-wrap gap-3">
    <img src={"https://img.pokemondb.net/artwork/" + details.name + ".jpg"} />

    <div className="d-flex flex-column align-items-center">
    <h2 >Types :</h2>
    <ul>
    {details.types?.map((typeObj, index) => (
     <li 
     key={index} 
     className={typeObj.type.name} // Applique la classe basée sur le type (ex : 'grass', 'fire')
     style={{
       padding: "5px 10px",
       margin: "5px 0",
       borderRadius: "5px",
       color: "white",
       fontWeight: "bold",
       listStyle: "none", // Enlève les puces de la liste
       textTransform: "uppercase",
     }}
   >
     {typeObj.type.name}
   </li>
    ))}
  </ul>
</div>
   {/* Forces */}
   <div className="d-flex flex-column align-items-center">
          <h3>Forces:</h3>
          <ul className="d-flex flex-column align-items-center">
            {details.damage_relations?.double_damage_to?.map((strength, index) => (
              <li
                key={index}
                className={strength.name} // Applique la classe basée sur le type (par ex. 'water', 'electric')
                style={{
                  padding: "5px 10px",
                  margin: "5px 0",
                  borderRadius: "5px",
                  color: "white",
                  fontWeight: "bold",
                  listStyle: "none", // Enlève les puces de la liste
                  textTransform: "uppercase",
                }}
              >
                {strength.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Faiblesses */}
        <div className="d-flex flex-column align-items-center">
          <h3>Faiblesses:</h3>
          <ul className="d-flex flex-column align-items-center">
            {details.damage_relations?.double_damage_from?.map((weakness, index) => (
              <li
                key={index}
                className={weakness.name} // Applique la classe basée sur le type (par ex. 'fire', 'bug')
                style={{
                  padding: "5px 10px",
                  margin: "5px 0",
                  borderRadius: "5px",
                  color: "white",
                  fontWeight: "bold",
                  listStyle: "none", // Enlève les puces de la liste
                  textTransform: "uppercase",
                }}
              >
                {weakness.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="d-flex flex-column align-items-center"><h2 >Taille : {details.height}</h2></div>
        <div className="d-flex flex-column align-items-center"><h2 >Poids : {details.weight}</h2></div>
       
           
    </div>
    <h2 className="d-flex mt-5 mb-5">{flavorText}</h2>
    <CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
    </Container>
    </>;
}
    
 
export default PokemonDetailsPage;