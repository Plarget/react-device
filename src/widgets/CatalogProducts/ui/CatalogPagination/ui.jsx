import classNames from 'classnames'
import PaginationControl from '@widgets/CatalogProducts/ui/CatalogPagination/ui/PaginationControl'
import './CatalogPagination.scss'

const CatalogPagination = (props) => {
  const {
    pagesProducts,
    changePage,
    activePage,
  } = props
  const iterationPageProducts = pagesProducts.slice(1, -1)
  const lastPageProduct = pagesProducts.at(-1)
  const hasMoreBefore = activePage >= 4
  const hasMoreAfter = activePage <= lastPageProduct - 4

  return (
    <div className="catalog-products__products-pagination pagination text text--small">
      <button
        className={ classNames('pagination__button-prev label', { 'is-active': activePage !== 1 }) }
        type="button"
        onClick={ () => changePage(activePage - 1) }
        disabled={ activePage === 1 }
      >
        Назад
      </button>
      <div className="pagination__body">
        <PaginationControl
          element={ pagesProducts[0] }
          setActivePage={ changePage }
          activePage={ activePage }
        />
        { hasMoreBefore && <div className="pagination__more">⋯</div> }
        { iterationPageProducts.map((element) => {
          if (element === activePage - 1 || element === activePage || element === activePage + 1 || element === activePage + 2) {
            return (
              <PaginationControl
                key={ element }
                element={ element }
                setActivePage={ changePage }
                activePage={ activePage }
              />
            )
          } else return undefined
        }) }
        { hasMoreAfter && <div className="pagination__more">⋯</div> }
        <PaginationControl
          element={ lastPageProduct }
          setActivePage={ changePage }
          activePage={ activePage }
        />


      </div>
      <button
        className={ classNames('pagination__button-next label', { 'is-active': activePage !== lastPageProduct }) }
        type="button"
        onClick={ () => changePage(activePage + 1) }
        disabled={ activePage === lastPageProduct }
      >
        Вперёд
      </button>
    </div>
  )
}

export default CatalogPagination