import { useDispatch } from 'react-redux'
import { addToBasket } from '@shared/store/reducers/BasketSlice'
import './ProductCard.scss'
import useNotification from '@shared/hooks/useNotification'

const ProductCard = (props) => {
  const { element } = props
  const { img, price, name } = element
  const dispatch = useDispatch()
  const notification = useNotification()
  const onCLick = () => {
    dispatch(addToBasket(element))
    notification('Товар успешно добавлен в корзину')
  }

  return (
    <div className="product-card">
      <button className="product-card__button-link" onClick={ onCLick }>
        <img
          className="product-card__image"
          src={ img }
          alt="selfie-stick"
          width="360" height="380" loading="lazy"
        />
      </button>
      <div className="product-card__info">
        <button className="product-card__button-link" onClick={ onCLick }>
          <h4 className="product-card__label label label--rubick">{ name }</h4>
        </button>
        <div className="product-card__price">{ price } ₽</div>
      </div>
    </div>
  )
}

export default ProductCard