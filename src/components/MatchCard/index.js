// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatchesItem} = props
  const {
    competingTeam,
    competingTeamLogo,
    result,
    matchStatus,
  } = recentMatchesItem

  const classNameWL = matchStatus === 'Lost' ? 'redColor' : 'greenColor'

  return (
    <div className="itemCard d-flex flex-column justify-content-center align-items-center p-2 m-1">
      <img src={competingTeamLogo} className="logoImgCard" />
      <h1 className="oppName">{competingTeam}</h1>
      <p className="resultStyle">{result}</p>
      <p className={classNameWL}>{matchStatus}</p>
    </div>
  )
}

export default MatchCard
