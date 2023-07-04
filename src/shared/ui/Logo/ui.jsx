import classNames from 'classnames'
import {Link} from 'react-router-dom'

const Logo = (props) => {
  const { className, variant } = props

  const logoImage = variant === 'alt' ? '/images/logo/logo-yellow.svg' : '/images/logo/logo.svg'

  return (
    <div className={classNames('logo', className)}>
      <Link className="logo__link" to={'/'} aria-label="go to home page">
        <img
          className="logo__image"
          title="to home page"
          src={logoImage}
          alt="device logo"
          width="145" height="36" loading="lazy"
        />
      </Link>
    </div>
  )
}

export default Logo