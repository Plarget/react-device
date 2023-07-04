import { ReactSVG } from 'react-svg'
import './Notification.scss'

const Notification = (props) => {
  const { text } = props

  return (
    <div className="notification__item">
      <ReactSVG src="/images/icons/content/info.svg"/>
      <h4 className="notification__label label label--very-small">{ text }</h4>
    </div>
  )
}

export default Notification