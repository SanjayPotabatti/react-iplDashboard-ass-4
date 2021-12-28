// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import MatchCard from '../MatchCard'
import LatestMatch from '../LatestMatch'

import './index.css'

class TeamMatches extends Component {
  state = {
    teamMatchesDetails: {},
    id: '',
    isLoadingM: true,
    isLoadingCard: true,
  }

  componentDidMount() {
    this.getTeamMatchesDetails()
  }

  getTeamMatchesDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedTeamMatchesDetails = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches.map(eachItem => ({
        competingTeam: eachItem.competing_team,
        competingTeamLogo: eachItem.competing_team_logo,
        result: eachItem.result,
        matchStatus: eachItem.match_status,
      })),
    }
    this.setState({
      teamMatchesDetails: updatedTeamMatchesDetails,
      id,
      isLoadingM: false,
      isLoadingCard: false,
    })
  }

  render() {
    const {teamMatchesDetails, id, isLoadingM, isLoadingCard} = this.state

    const {
      teamBannerUrl,
      latestMatchDetails,
      recentMatches,
    } = teamMatchesDetails

    return (
      <div className={`bgContainerTeamMatches${id} p-2`}>
        <img src={teamBannerUrl} className="bannerImg" />
        {isLoadingM ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <LatestMatch latestMatchDetails={latestMatchDetails} />
        )}
        <ul className="d-flex flex-wrap p-2">
          {isLoadingCard ? (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            recentMatches.map(eachItem => (
              <MatchCard recentMatchesItem={eachItem} />
            ))
          )}
        </ul>
      </div>
    )
  }
}

export default TeamMatches
