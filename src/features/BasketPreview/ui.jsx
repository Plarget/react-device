import BasketPreviewCard from './ui/BasketPreviewCard'
import Button from '@shared/ui/Button/ui'
import { useSelector } from 'react-redux'
import './BasketPreview.scss'

const BasketPreview = () => {
  const basket = useSelector(state => state.BasketReducer)
  const basketLength = Object.values(basket).length
  const totalPrice = Object.values(basket).reduce((acc, item) => acc + item.price, 0)

  if (!basketLength) {
    return (
      <div className="basket-preview">
        <div className="basket-preview__empty label label--white">
          В корзине нет товаров
        </div>
      </div>
    )
  }
  return (
    <div className="basket-preview">
      <div className="basket-preview__products">
        { Object.entries(basket).map((element) => {
          return <BasketPreviewCard key={ element[0] } id={ element[0] } product={ element[1] }/>
        }) }
      </div>
      <div className="basket-preview__info text text--white">
        <span className="basket-preview__counter">Товаров: { basketLength }</span>
        <span className="basket-preview__sum">Сумма: { totalPrice } ₽</span>
      </div>
      <div className="basket-preview__button-wrapper">
        <Button
          className="basket-preview__button button--white label"
        >
          Открыть корзину
        </Button>
      </div>
    </div>
  )
}

export default BasketPreview