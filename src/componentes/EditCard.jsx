import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function EditCard({ onClose, onUpdate, queenData }) {
  const [name, setName] = useState(queenData.name);
  const [description, setDescription] = useState(queenData.description);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const updatedCard = {
      name,
      description,
    };
    await onUpdate(updatedCard);
  };

  return (
    <div style={{ display: "flex"}}>
      <div>
        <Card style={{ flexDirection: "row"}}>
          <Card.Img src={queenData.image[0]} style={{width: "18rem", height:"25rem"}}/>
          <Card.Body >
            <form onSubmit={handleFormSubmit} style={{display: "flex", flexDirection: "column"}}>
              <label>Name:</label>
              <input
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label>Description:</label>
              <textarea
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              <p style={{color:"black", textShadow:"none"}}>Winner:{queenData.winner ? "👑" : "❌"}</p>
              <p style={{color:"black", textShadow:"none"}}>
                Miss Congeniality:{queenData.missCongeniality ? "👑" : "❌"}
              </p>
              <div>
              <Button
                variant="primary"
                onClick={onClose}
                style={{ width: "70px" }}
              >
                Close
              </Button>
              <Button
                variant="primary"
                style={{ width: "70px", marginLeft: "5px" }}
                type="submit"
              >
                Done
              </Button>
              </div>
            </form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default EditCard;
