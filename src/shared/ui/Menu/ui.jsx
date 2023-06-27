import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import './Menu.scss'

const Menu = (props) => {
  const { className } = props

  return (
    <ul className={ classNames('menu', className) }>
      <li className="menu__item">
        <NavLink className="menu__link" to="delivery">Доставка</NavLink>
      </li>
      <li className="menu__item">
        <NavLink className="menu__link" to="warranty">Гарантия</NavLink>
      </li>
      <li className="menu__item">
        <NavLink className="menu__link" to="сontacts">Контакты</NavLink>
      </li>
    </ul>
  )
}

export default Menu