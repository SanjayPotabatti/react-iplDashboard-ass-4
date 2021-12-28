// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props

  const updatedMatchDetails = {
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    date: latestMatchDetails.date,
    firstInnings: latestMatchDetails.first_innings,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    secondInnings: latestMatchDetails.second_innings,
    umpires: latestMatchDetails.umpires,
    venue: latestMatchDetails.venue,
    id: latestMatchDetails.id,
  }

  return (
    <div className="p-4">
      <h1 className="mainHeadingM pt-3">Latest Matches</h1>
      <div className="latestMatchCardContainer">
        <div>
          <div className="d-flex flex-row justify-content-center align-items-center p-1">
            <div className="mr-5">
              <p className="para1">{updatedMatchDetails.competingTeam}</p>
              <p className="para1 p-0">{updatedMatchDetails.date}</p>
              <p className="para2 p-0">{updatedMatchDetails.venue}</p>
              <p className="para2 p-0">{updatedMatchDetails.id}</p>
            </div>
            <div>
              <img
                src={updatedMatchDetails.competingTeamLogo}
                className="teamLogo"
                alt="logoImg"
              />
            </div>
          </div>
        </div>
        <hr className="d-md-none hrStyle" />
        <div>
          <p className="para2 m-0">First Innings</p>
          <p className="para2">{updatedMatchDetails.firstInnings}</p>
          <p className="para2 m-0">Secnd Innings</p>
          <p className="para2">{updatedMatchDetails.secondInnings}</p>
          <p className="para2 m-0">Man Of The Match</p>
          <p className="para2 ">{updatedMatchDetails.manOfTheMatch}</p>
          <p className="para2 m-0">Umpires</p>
          <p className="para2">{updatedMatchDetails.umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
