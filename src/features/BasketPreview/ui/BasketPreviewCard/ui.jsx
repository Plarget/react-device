import IconButton from '@shared/ui/IconButton'
import { ReactSVG } from 'react-svg'
import { useDispatch } from 'react-redux'
import { deleteFromBasket } from '@shared/store/reducers/BasketSlice'
import './BasketPreviewCard.scss'

const BasketPreviewCard = (props) => {
  const {
    id,
    product: {
      name,
      img,
    },
  } = props
  const dispatch = useDispatch()

  return (
    <div className="basket-preview-card">
      <div className="basket-preview-card__preview">
        <img
          className="basket-preview-card__image"
          src={ img }
          alt="shavel"
          width="39" height="44" loading="lazy"
        />
        <div className="basket-preview-card__name text text--white">
          { name }
        </div>
      </div>
      <IconButton
        className="basket-preview-card__button"
        onClick={ () => dispatch(deleteFromBasket(id)) }
      >
        <ReactSVG className="react-svg" src="/images/icons/cross.svg"/>
      </IconButton>
    </div>
  )
}

export default BasketPreviewCard