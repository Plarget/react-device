import { ReactSVG } from 'react-svg'
import './DeliveryBunner.scss'

const DeliveryBanner = () => {
  return (
    <article className="delivery-banner">
      <div className="delivery-banner__about">
        <h2 className="delivery-banner__title title">Доставка</h2>
        <div className="delivery-banner__text text">
          <p>Мы с удовольствием доставим ваш товар прямо
            к вашему подъезду совершенно бесплатно! Ведь
            мы неплохо заработаем, поднимая его на ваш этаж.</p>
        </div>
      </div>
      <ReactSVG className='react-svg' src='/images/icons/content/delivery.svg'/>
    </article>
  )
}

export default DeliveryBanner