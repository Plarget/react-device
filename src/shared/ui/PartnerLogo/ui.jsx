import classNames from 'classnames'

const PartnerLogo = (props) => {
  const { className } = props

  return (
    <div className={ classNames('partner-logo', className) }>
      <a className="partner-logo__link" href='/' aria-label="go to our partner's site">
        <span className="partner-logo__wrapper" title="to partner's site">
          <img
            className="partner-logo__image"
            src="/images/logo/partner_logo.png"
            alt="logo"
            width="115" height="33" loading="lazy"
          />
        </span>
      </a>
    </div>
  )
}


export default PartnerLogo