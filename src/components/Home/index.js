// Write your code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamCard()
  }

  getTeamCard = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
    const updatedTeamsList = data.teams.map(eachTeamCard => ({
      id: eachTeamCard.id,
      name: eachTeamCard.name,
      teamImageUrl: eachTeamCard.team_image_url,
    }))
    this.setState({teamsList: updatedTeamsList, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state

    return (
      <div className="homeBg d-flex flex-column align-items-center justify-content-center">
        <div className="d-flex flex-row p-5">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logoImg"
          />
          <h1 className="mainHeading pl-3">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <ul className="unorderedList d-flex flex-row flex-wrap">
            {teamsList.map(eachItem => (
              <TeamCard teamCardDetails={eachItem} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default Home
