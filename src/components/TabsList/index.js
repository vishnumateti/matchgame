import './index.css'

const TabsList = props => {
  const {tabDetails, tabsChange, textHighlet} = props
  const {tabId, displayText} = tabDetails

  const onChangeTab = () => {
    tabsChange(tabId)
  }

  const textClassName = textHighlet ? 'yellow-text' : 'white-text'
  return (
    <li className="list-container">
      <button
        className={`tab-button ${textClassName}`}
        onClick={onChangeTab}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabsList
