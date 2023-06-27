import classNames from 'classnames'
import HeaderMenu from '@widgets/Layout/ui/Header/ui/HeaderMenu'
import HeaderActions from '@widgets/Layout/ui/Header/ui/HeaderActions'
import { forwardRef } from 'react'
import './HeaderMobileMenu.scss'

const HeaderMobileMenu = forwardRef(function HeaderMobileMenu(props, ref) {
  const { isMenuOpened } = props

  return (
    <div
      className={ classNames(
        'mobile-menu',
        { 'is-opened': isMenuOpened }
      ) }
    >
      <HeaderActions/>
      <HeaderMenu/>
    </div>
  )
})

export default HeaderMobileMenu