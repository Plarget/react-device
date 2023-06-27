import TypeCard from '@shared/ui/TypeCard'
import { ReactSVG } from 'react-svg'
import './TypesProducts.scss'

const TypesProducts = () => {
  return (
    <section className="types-products">
      <div className="types-products__body container">
        <TypeCard
          img={ <ReactSVG className='react-svg' src="/images/icons/content/vr.svg"/> }
          text='Виртуальная реальность'
        />
        <TypeCard
          img={ <ReactSVG className='react-svg' src="/images/icons/content/selfi.svg"/> }
          text='Моноподы для селфи'
          imageToBottom
        />
        <TypeCard
          img={ <ReactSVG className='react-svg' src="/images/icons/content/camera.svg"/> }
          text='Экшн-камеры'
        />
        <TypeCard
          img={ <ReactSVG className='react-svg' src="/images/icons/content/fitnes.svg"/> }
          text='Фитнес-браслеты'
        />
        <TypeCard
          img={ <ReactSVG className='react-svg' src="/images/icons/content/smart-hours.svg"/> }
          text='Умные часы'
        />
        <TypeCard
          img={ <ReactSVG className='react-svg' src="/images/icons/content/cvadraqopter.svg"/> }
          text='Квадрокоптеры'
        />

      </div>
    </section>
  )
}

export default TypesProducts