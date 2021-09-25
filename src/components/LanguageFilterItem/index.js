// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {item, active, changeActive} = props
  const {language, id} = item
  const element = active ? 'glitter' : null

  const Activate = () => {
    changeActive(id)
  }

  return (
    <button type="button" className={`item ${element}`} onClick={Activate}>
      <p className="para">{language}</p>
    </button>
  )
}

export default LanguageFilterItem
