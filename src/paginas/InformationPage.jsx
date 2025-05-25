import "./InformationPage.css";
import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function InformationPage() {

  const params = useParams()
  const [queens, setQueens] = useState([])

  useEffect (() => {

    axios.get(`${import.meta.env.VITE_SERVER_URL}/information`)
    .then((response) => {
      setQueens(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])


  return (
    <div id="serchbar">
      <input></input>
      <label></label>
      {queens &&
        queens.map((eachQueen, i) => {
          return (
            <div key={i}>
              <Link to={"/information/" + eachQueen.id}>
                <div
                  className="card m-2 p-2 text-center"
                  style={{ width: "24rem", height: "18rem" }}
                >
                  <div className="card-body">
                    <img
                      src={eachQueen.image}
                      style={{ height: "6rem" }}
                      alt={"image of" + eachQueen.name}
                    />
                    <h5 className="card-title text-truncate mt-2">
                      {eachQueen.name}
                    </h5>
                    <h6 className="card-subtitle mb-3 text-muted">
                      <em>{eachQueen.season}</em>
                    </h6>
                    <p className="card-text">
                      Season: {eachQueen.winner}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}

      {/* <DragQueenCard />
      <SeasonCard />
      <EpisodeCard /> */}
    </div>
  );
}

export default InformationPage;
