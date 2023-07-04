import './NotificationBody.scss'

const NotificationBody = (props) => {
  const { children } = props

  return (
    <div className="notification">
      { children }
    </div>
  )
}

export default NotificationBody