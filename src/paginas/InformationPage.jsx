import "./InformationPage.css"
import DragQueenCard from './DragQueenCard'
import SeasonCard from './SeasonCard'
import EpisodeCard from './EpisodeCard'

function InformationPage() {
  return (
    <div id="serchbar">
      <input></input>
      <label></label>
      <DragQueenCard />
      <SeasonCard />
      <EpisodeCard />

    </div>
  )
}

export default InformationPage
