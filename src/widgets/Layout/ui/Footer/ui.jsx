import Logo from '@shared/ui/Logo'
import Menu from '@shared/ui/Menu'
import './Footer.scss'
import Address from '@shared/ui/Address'
import PhoneLink from '@shared/ui/PhoneLink/ui'
import SocialGroup from '@shared/ui/SocialGroup/ui'
import PartnerLogo from '@shared/ui/PartnerLogo'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__body container">
        <Logo className="footer__logo" variant="alt"/>
        <div className="footer__column">
          <Address className="footer__address text text--white"/>
          <Menu className="footer__menu label label--white"/>
          <PhoneLink className="footer__phone-link text text--white" before='Тел.:'/>
          <div className="footer__line"/>
          <SocialGroup className='footer__socials' />
          <PartnerLogo className='footer__partner-logo'/>
        </div>
      </div>
    </footer>
  )
}

export default Footer