import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class GithubPopularRepos extends Component {
  state = {onActive: 'ALL', dataList: [], apiStatus: apiStatusConstants.initial}

  async componentDidMount() {
    const response = await fetch(
      'https://apis.ccbp.in/popular-repos?language=ALL',
    )
    const data = await response.json()
    const updatedData = data.popular_repos.map(eachItem => ({
      name: eachItem.name,
      issuesCount: eachItem.issues_count,
      forksCount: eachItem.forks_count,
      starsCount: eachItem.stars_count,
      avatarUrl: eachItem.avatar_url,
      id: eachItem.id,
    }))
    this.setState({dataList: [...updatedData]})
  }

  changeActive = async keyID => {
    this.setState({onActive: keyID}, this.getUpdatedData)
  }

  getUpdatedData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {onActive} = this.state
    const response = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${onActive}`,
    )
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.popular_repos.map(eachItem => ({
        name: eachItem.name,
        issuesCount: eachItem.issues_count,
        forksCount: eachItem.forks_count,
        startsCount: eachItem.stars_count,
        avatarUrl: eachItem.avatar_url,
        id: eachItem.id,
      }))
      this.setState({
        dataList: [...updatedData],
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  loadingView = () => (
    <div testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  successView = () => {
    const {dataList} = this.state
    return (
      <ul className="ul-container">
        {dataList.map(eachItem => (
          <RepositoryItem item={eachItem} key={eachItem.id} />
        ))}
      </ul>
    )
  }

  renderSwitch = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.initial:
        return this.successView()
      case apiStatusConstants.inProgress:
        return this.loadingView()
      case apiStatusConstants.success:
        return this.successView()
      case apiStatusConstants.failure:
        return this.failureView()
      default:
        return null
    }
  }

  render() {
    const {onActive, dataList} = this.state
    console.log(dataList)
    return (
      <div className="main-container">
        <h1 className="heading">Popular</h1>
        <div className="ul">
          {languageFiltersData.map(eachItem => (
            <LanguageFilterItem
              item={eachItem}
              key={eachItem.id}
              changeActive={this.changeActive}
              active={eachItem.id === onActive}
            />
          ))}
        </div>
        {this.renderSwitch()}
      </div>
    )
  }
}

export default GithubPopularRepos
