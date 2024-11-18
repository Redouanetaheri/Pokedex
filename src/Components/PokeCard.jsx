import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const PokeCard = ({ PokeCard }) => {
  const navigate = useNavigate();

  const navigateTo = (id) => {
    navigate("/DetailsPage/" + id);
  };
  console.log(PokeCard);

  // const url = pokemon.url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "")

  return (
    <>
    <div className="pokecard">
      <Card
        // style={{ width: "18rem" }}
        onClick={() => {
          navigateTo(PokeCard.name);
        }}
      >
        <Card.Img
          variant="top"
          src={"https://img.pokemondb.net/artwork/" + PokeCard.name + ".jpg"}
        />
        <Card.Body>
          <Card.Title>{PokeCard.name}</Card.Title>
          <Button variant="primary">Voir detail</Button>
        </Card.Body>
      </Card>
      </div>
    </>
  );
};

export default PokeCard;
