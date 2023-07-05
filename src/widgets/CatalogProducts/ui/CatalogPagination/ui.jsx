import classNames from 'classnames'
import PaginationControl from './ui/PaginationControl'
import usePagination from './hooks/usePagination'
import './CatalogPagination.scss'

const CatalogPagination = (props) => {
  const {
    pagesProducts,
    changePage,
    activePage,
  } = props

  const {
    iterationPageProducts,
    lastPageProduct,
    hasMoreBefore,
    hasMoreAfter,
    range
  } = usePagination(pagesProducts, activePage)


  return (
    <div className="catalog-products__products-pagination pagination text text--small">
      <button
        className={classNames('pagination__button-prev label', { 'is-active': activePage !== 1 })}
        type="button"
        onClick={() => changePage(activePage - 1)}
        disabled={activePage === 1}
      >
        Назад
      </button>
      <div className="pagination__body">
        <PaginationControl
          element={pagesProducts[0]}
          setActivePage={changePage}
          activePage={activePage}
        />
        {hasMoreBefore && <div className="pagination__more">⋯</div>}
        {iterationPageProducts.map((element) => {
          const { min, max } = range
          const hasControl = element >= min && element <= max
          if (!hasControl) return null

          return (
            <PaginationControl
              key={element}
              element={element}
              setActivePage={changePage}
              activePage={activePage}
            />
          )
        })}
        {hasMoreAfter && <div className="pagination__more">⋯</div>}
        <PaginationControl
          element={lastPageProduct}
          setActivePage={changePage}
          activePage={activePage}
        />


      </div>
      <button
        className={classNames('pagination__button-next label', { 'is-active': activePage !== lastPageProduct })}
        type="button"
        onClick={() => changePage(activePage + 1)}
        disabled={activePage === lastPageProduct}
      >
        Вперёд
      </button>
    </div>
  )
}

export default CatalogPagination