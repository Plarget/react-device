import './CatalogPath.scss'
import { Link } from 'react-router-dom'

const CatalogPath = () => {
  return (
    <section className='catalog-path'>
      <div className="catalog-path__body container">
        <h2 className="catalog-path__title title">Моноподы для селфи</h2>
        <ul className="catalog-path__list">
          <li className="catalog-path__item">
            <Link className='catalog-path__link' to='/'>Главная</Link>
          </li>
          <li className="catalog-path__item">
            <Link className='catalog-path__link' to='..' relative='path'>Каталог товаров</Link>
          </li>
          <li className="catalog-path__item">
            <Link className='catalog-path__link' to='.'>Моноподы для селфи</Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default CatalogPath