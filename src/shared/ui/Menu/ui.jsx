import {NavLink} from 'react-router-dom'
import classNames from 'classnames'
import './Menu.scss'

const Menu = (props) => {
  const {
    className,
    menuMobile,
    ...rest
  } = props

  return (
    <ul className={classNames('menu', className)}>
      <li className="menu__item">
        <NavLink className="menu__link" to="delivery" {...rest}>Доставка</NavLink>
      </li>
      <li className="menu__item">
        <NavLink className="menu__link" to="warranty" {...rest}>Гарантия</NavLink>
      </li>
      <li className="menu__item">
        <NavLink className="menu__link" to="сontacts" {...rest}>Контакты</NavLink>
      </li>
      {menuMobile && (
        <>
          <li className="menu__item">
            <NavLink className="menu__link" to="catalog" {...rest}>Каталог товаров</NavLink>
          </li>
          <li className="menu__item">
            <NavLink className="menu__link" to="basket" {...rest}>Корзина</NavLink>
          </li>
          <li className="menu__item">
            <NavLink className="menu__link" to="search" {...rest}>Поиск по сайту</NavLink>
          </li>
          <li className="menu__item">
            <NavLink className="menu__link" to="compare" {...rest}>Сравнение</NavLink>
          </li>
          <li className="menu__item">
            <NavLink className="menu__link" to="login" {...rest}>Войти</NavLink>
          </li>
        </>
      )}
    </ul>
  )
}

export default Menu