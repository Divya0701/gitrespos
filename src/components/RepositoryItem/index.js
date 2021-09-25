// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {item} = props
  const {name, issuesCount, forksCount, starsCount, avatarUrl} = item

  return (
    <li className="li">
      <img src={avatarUrl} alt={name} className="coverImage" />
      <h1 className="heading2">{name}</h1>
      <div>
        <div className="in">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
            className="icon"
          />
          <p className="p">{starsCount} stars</p>
        </div>
        <div className="in">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
            className="icon"
          />
          <p className="p">{forksCount} forks</p>
        </div>
        <div className="in">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open-issues"
            className="icon"
          />
          <p className="p">{issuesCount} open issues</p>
        </div>
      </div>
    </li>
  )
}

export default RepositoryItem
