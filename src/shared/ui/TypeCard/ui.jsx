import classNames from 'classnames'
import './TypeCard.scss'

const TypeCard = (props) => {
  const {
    className,
    img,
    text,
    imageToBottom,
  } = props
  return (
    <div className={ classNames('type-card', className) }>
      <div className={ classNames('type-card__wrapper-image', { 'image-bottom': imageToBottom }) }>
        { img }
      </div>
      <div className="type-card__text">{ text }</div>
    </div>
  )
}

export default TypeCard