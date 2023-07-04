import QuickSearch from '@features/QuickSearch'
import Button from '@shared/ui/Button/ui'
import { ReactSVG } from 'react-svg'
import classNames from 'classnames'
import Tooltip from '@shared/ui/Tooltip'
import BasketPreview from '@features/BasketPreview'
import { useSelector } from 'react-redux'
import './HeaderActions.scss'

const HeaderActions = (props) => {
  const { className } = props

  const basket = useSelector(state => state.BasketReducer)
  const basketLength = Object.values(basket).length

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
        <Tooltip
          renderTriggerComponent={ (props = {}) =>
            <Button className="header__actions-button-basket button--transparent" { ...props }>
              <span
                className={ classNames('header__actions-basket-counter', {'is-active' : basketLength}) }
              >
                { basketLength }
              </span>
              <ReactSVG className="react-svg" src="/images/icons/basket.svg"/> Корзина
            </Button>
          }
        >
          <BasketPreview/>
        </Tooltip>
      </div>

    </div>
  )
}

export default HeaderActions