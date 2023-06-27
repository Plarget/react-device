import classNames from 'classnames'
import './PhoneLink.scss'

const PhoneLink = (props) => {
  const {
    className,
    before
  } = props

  return (
    <a
      className={ classNames('phone-link', className) }
      href="tel:+78128121212"
    >
      { before }+7 (812) 812-12-12
    </a>
  )
}

export default PhoneLink