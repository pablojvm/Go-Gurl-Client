import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

function DragQueenCard() {

  const params = useParams()
  const [queen, setQueens] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    getData();
  }, [params.id]);

  const getData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/informationPage/${params.id}`)
      setQueens(response.data)
    } catch (error) {
      console.log(error)
    }
  };

  if (!queen) return <p>Loading...</p>

  return (
    <div>
      <div>
      <h1>{queen.name}</h1>
      <p>{queen.description}</p>
      <img src={queen.imageUrl} alt={queen.name} />
    </div>
    </div>
  )
}

export default DragQueenCard
