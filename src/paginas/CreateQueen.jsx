import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CreateQueen() {
  const navigate = useNavigate();

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [winner, setWinner] = useState(false);
  const [missCongeniality, setMissCongeniality] = useState(false);
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newQueen = {
      image: image || "descarga.jpeg",
      name,
      winner,
      missCongeniality,
      description,
    };

    axios
      .post(`${import.meta.env.VITE_SERVER_URL}/queens`, newQueen)
      .then(() => {
        navigate("/informationPage");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Crea tu propia REINA</h1>
      <form onSubmit={handleSubmit}>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Text>
              <label>Image:</label>
              <input
                name="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <label>Name:</label>
              <input
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
              <label>Winner:</label>
              <input
                type="checkbox"
                checked={winner}
                onChange={(e) => setWinner(e.target.checked)}
              ></input>
              <label>MissCongeniality:</label>
              <input
                type="checkbox"
                checked={missCongeniality}
                onChange={(e) => setMissCongeniality(e.target.checked)}
              ></input>
              <label>Description:</label>
              <input
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></input>
            </Card.Text>
            <Button
              variant="primary"
              as={Link}
              to="/informationPage"
              style={{ width: "70px" }}
            >
              Back
            </Button>
            <Button
              variant="primary"
              style={{ width: "70px", marginLeft: "5px" }}
              type="submit"
            >
              Create!
            </Button>
          </Card.Body>
        </Card>
      </form>
    </div>
  );
}

export default CreateQueen;
