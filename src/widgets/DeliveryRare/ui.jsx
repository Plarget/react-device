import { ReactSVG } from 'react-svg'
import './DeliveryRare.scss'
import Hint from '@shared/ui/Hint'

const DeliveryRare = () => {
  return (
    <section className="delivery-rare">
      <div className="delivery-rare__inner container">
        <div className="delivery-rare__body">
          <div className="delivery-rare__header">
            <ReactSVG className="react-svg" src="/images/icons/content/truck.svg"/>
          </div>
          <h2 className="delivery-rare__title label label--big">Доставим редкий товар под заказ</h2>
          <div className="delivery-rare__info">
            <Hint text='Редкие товары помечены специальном значком'>
              <ReactSVG className="react-svg" src="/images/icons/content/info.svg"/>
            </Hint>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DeliveryRare
