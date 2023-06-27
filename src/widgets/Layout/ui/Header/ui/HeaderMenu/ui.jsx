import classNames from 'classnames'
import { ReactSVG } from 'react-svg'
import Menu from '@shared/ui/Menu'
import useToggle from '@shared/hooks/useToggle'
import HeaderDropDown from '@widgets/Layout/ui/Header/ui/HeaderDropDown'
import { useRef } from 'react'
import useClickOutside from '@shared/hooks/useClickOutside'
import './HeaderMenu.scss'

const HeaderMenu = (props) => {
  const { className } = props
  const [isDropDownActive, toggleIsDropDownActive, setDropDownActive] = useToggle(false)
  const ref = useRef(null)

  useClickOutside(() => {
    setDropDownActive(false)
  }, ref)


  return (
    <nav className={ classNames('header__menu', className) }>
      <div className="header__menu-wrapper" ref={ ref }>
        <button
          className={ classNames(
            'header__menu-button label',
            { 'is-active': isDropDownActive }
          ) }
          type="button"
          onClick={ toggleIsDropDownActive }
        >
          Каталог товаров
          <ReactSVG className="react-svg" src="/images/icons/plus.svg"/>
        </button>
        <HeaderDropDown isDropDownActive={ isDropDownActive }/>
      </div>

      <Menu className="header__menu-list label"/>
    </nav>
  )
}

export default HeaderMenu