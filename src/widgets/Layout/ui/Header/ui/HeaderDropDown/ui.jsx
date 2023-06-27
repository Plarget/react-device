import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import './HeaderDropDown.scss'

const HeaderDropDown = (props) => {
  const { isDropDownActive } = props

  return (
    <div
      className={ classNames(
        'header__drop-down drop-down',
        { 'is-active': isDropDownActive }
      ) }
    >
      <ul className="drop-down__list">
        <li className="drop-down__item">
          <NavLink className="drop-down__link" to="catalog/vr">Виртуальная реальность</NavLink>
        </li>
        <li className="drop-down__item">
          <NavLink className="drop-down__link" to="catalog/monopod-for-selfi">Моноподы для cелфи</NavLink>
        </li>
        <li className="drop-down__item">
          <NavLink className="drop-down__link" to="catalog/actionы-camera">Экшн-камеры</NavLink>
        </li>
        <li className="drop-down__item">
          <NavLink className="drop-down__link" to="catalog/fitness-bracelets">Фитнес-браслеты</NavLink>
        </li>
        <li className="drop-down__item">
          <NavLink className="drop-down__link" to="catalog/smart-watch">Умные часы</NavLink>
        </li>
        <li className="drop-down__item">
          <NavLink className="drop-down__link" to="catalog/quadrocopter">Квадрокоптеры</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default HeaderDropDown