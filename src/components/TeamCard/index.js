// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamCardDetails} = props
  const {id, name, teamImageUrl} = teamCardDetails
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="teamCardBg d-flex flex-row p-3 mb-3 mr-2">
        <img src={teamImageUrl} className="cardImg" alt={name} />
        <h1 className="cardHeading mr-5">{name}</h1>
      </li>
    </Link>
  )
}

export default TeamCard
