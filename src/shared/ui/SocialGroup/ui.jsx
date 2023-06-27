import { ReactSVG } from 'react-svg'
import classNames from 'classnames'
import './SocialGroup.scss'

const SocialGroup = (props) => {
  const { className } = props

  return (
    <ul className={ classNames('social-group', className) }>
      <li className="social-group__item">
        <a href="/" className="social-group__link">
          <ReactSVG className="react-svg" src="/images/icons/telegram.svg"/>
        </a>
      </li>
      <li className="social-group__item">
        <a href="/" className="social-group__link">
          <ReactSVG className="react-svg" src="/images/icons/youtube.svg"/>
        </a>
      </li>
      <li className="social-group__item">
        <a href="/" className="social-group__link">
          <ReactSVG className="react-svg" src="/images/icons/twitter.svg"/>
        </a>
      </li>
    </ul>
  )
}

export default SocialGroup