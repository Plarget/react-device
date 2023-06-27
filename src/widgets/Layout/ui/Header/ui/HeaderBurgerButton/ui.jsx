import classNames from 'classnames'
import './HeaderBurgerButton.scss'

const HeaderBurgerButton = (props) => {
  const { isMenuOpened, toggleIsMenuOpened } = props

  return (
    <button
      className={ classNames(
        'burger-button visible-mobile',
        { 'is-opened': isMenuOpened }
      ) }
      onClick={ toggleIsMenuOpened }
    >
      <div className="center">
        <div></div>
      </div>
    </button>
  )
}

export default HeaderBurgerButton