import Logo from '@shared/ui/Logo'
import HeaderActions from '@widgets/Layout/ui/Header/ui/HeaderActions'
import HeaderMenu from '@widgets/Layout/ui/Header/ui/HeaderMenu'
import HeaderBurgerButton from '@widgets/Layout/ui/Header/ui/HeaderBurgerButton'
import useToggle from '@shared/hooks/useToggle'
import HeaderMobileMenu from '@widgets/Layout/ui/Header/ui/HeaderMobileMenu'
import useBodyLock from '@shared/hooks/useBodyLock'
import { useRef } from 'react'
import './Header.scss'

const Header = () => {
  const [isMenuOpened, toggleIsMenuOpened] = useToggle(false)
  const ref = useRef()
  const bodyLock = useBodyLock(isMenuOpened, ref)

  const toggleMenu = () => {
    toggleIsMenuOpened()
    bodyLock()
  }

  return (
    <header className="header">
      <div className="header__inner container">
        <div className="header__body">
            <Logo className="header__logo"/>
            <HeaderActions className="hidden-mobile"/>
            <HeaderMenu className="hidden-mobile"/>
            <HeaderBurgerButton
              isMenuOpened={ isMenuOpened }
              toggleIsMenuOpened={ toggleMenu }
            />
            <HeaderMobileMenu isMenuOpened={ isMenuOpened } ref={ ref }/>
        </div>
      </div>
    </header>
  )
}

export default Header
