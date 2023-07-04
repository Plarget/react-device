import classNames from 'classnames'
import {forwardRef} from 'react'
import Menu from '@shared/ui/Menu'
import './HeaderMobileMenu.scss'

const HeaderMobileMenu = forwardRef(function HeaderMobileMenu(props, ref) {
  const {
    isMenuOpened,
    setIsMenuOpened,
  } = props
  const onClick = (path) => {
    setIsMenuOpened(false)
  }

  return (
    <div
      className={classNames(
        'mobile-menu',
        { 'is-opened': isMenuOpened }
      )}
    >
      <Menu className="mobile-menu__list label" menuMobile onClick={onClick}/>
    </div>
  )
})

export default HeaderMobileMenu