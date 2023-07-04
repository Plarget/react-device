import ProductCard from '@shared/ui/ProductCard'
import CatalogRangeSlider from './ui/CatalogRangeSlider'
import Button from '@shared/ui/Button/ui'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import CatalogCheckBoxes from './ui/CatalogCheckBoxes'
import CatalogRadioButtons from '@widgets/CatalogProducts/ui/CatalogRadioButtons'
import CatalogSelect from '@widgets/CatalogProducts/ui/CatalogSelect'
import IconButton from '@shared/ui/IconButton'
import { ReactSVG } from 'react-svg'
import classNames from 'classnames'
import products from '@shared/data/products'
import CatalogPagination from '@widgets/CatalogProducts/ui/CatalogPagination'
import './CatalogProducts.scss'

const CatalogProducts = () => {
  const {
    register,
    handleSubmit,
  } = useForm()
  const [rangeValue, setRangeValue] = useState([0, 5000])
  const [activeSelect, setActiveSelect] = useState()
  const [activeUpDown, setActiveUpDown] = useState('up')
  const [activePage, setActivePage] = useState(1)
  const [filter, setFilter] = useState()
  const pagesProducts = Array.from({ length: 15 }, (_, index) => index + 1)

  const onSubmit = (data) => {
    console.log({ ...data, rangeValue })
    setFilter({ ...data, rangeValue })
  }

  const changePage = (state) => {
    console.log(filter, state)
    setActivePage(state)
  }

  return (
    <section className="catalog-products">
      <div className="catalog-products__body container">
        <form className="catalog-products__form" onSubmit={ handleSubmit(onSubmit) }>
          <h3 className="catalog-products__form-label label label--small">фильтр:</h3>
          <CatalogRangeSlider register={ register } rangeValue={ rangeValue } setRangeValue={ setRangeValue }/>
          <CatalogCheckBoxes register={ register }/>
          <CatalogRadioButtons register={ register }/>
          <Button className="catalog-products__form-button label button--line" type="submit">Показать</Button>
        </form>
        <div className="catalog-products__content">
          <div className="catalog-products__sort">
            <h3 className="catalog-products__sort-label label label--small">сортировка:</h3>
            <CatalogSelect activeSelect={ activeSelect } setActiveSelect={ setActiveSelect }/>
            <div className="catalog-products__sort-actions">
              <IconButton
                className={ classNames('catalog-products__sort-button-up', { 'is-active': activeUpDown === 'up' }) }
                onClick={ () => setActiveUpDown('up') }
              >
                <ReactSVG className="react-svg" src="/images/icons/up-down-arrow.svg"/>
              </IconButton>
              <IconButton
                className={ classNames(
                  'catalog-products__sort-button-down',
                  { 'is-active': activeUpDown === 'down' }
                ) }
                onClick={ () => setActiveUpDown('down') }
              >
                <ReactSVG className="react-svg" src="/images/icons/up-down-arrow.svg"/>
              </IconButton>
            </div>
          </div>
          <div className="catalog-products__products">
            <div className="catalog-products__products-body">
              { products.map((element) => (
                <ProductCard key={ element.id } element={ element }/>
              )) }
            </div>
            <Button className="catalog-products__products-more button--gray label">Загрузить ещё</Button>
            <CatalogPagination
              pagesProducts={ pagesProducts }
              activePage={ activePage }
              changePage={ changePage }
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CatalogProducts