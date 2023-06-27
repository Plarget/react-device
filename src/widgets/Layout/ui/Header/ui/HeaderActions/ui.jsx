import QuickSearch from '@features/QuickSearch'
import Button from '@shared/ui/Button/ui'
import { ReactSVG } from 'react-svg'
import classNames from 'classnames'
import './HeaderActions.scss'

const HeaderActions = (props) => {
  const { className } = props

  return (
    <div className={ classNames('header__actions', className) }>
      <div className="header__actions-group-1">
        <QuickSearch/>
        <Button className="header__button button--transparent">
          <ReactSVG className="react-svg" src="/images/icons/login.svg"/> Войти
        </Button>
      </div>
      <div className="header__actions-group-2">
        <Button className="header__button button--transparent">
          <ReactSVG className="react-svg" src="/images/icons/chart.svg"/> Сравнить
        </Button>
        <Button className="header__button button--transparent">
          <ReactSVG className="react-svg" src="/images/icons/basket.svg"/> Корзина
        </Button>
      </div>

    </div>
  )
}

export default HeaderActions