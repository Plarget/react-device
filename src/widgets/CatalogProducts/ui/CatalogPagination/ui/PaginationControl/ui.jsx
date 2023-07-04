import classNames from 'classnames'
import './PaginationControl.scss'

const PaginationButton = (props) => {
  const {
    activePage,
    setActivePage,
    element,
  } = props

  return (
    <button
      className={ classNames('pagination__control', { 'is-active': activePage === element }) }
      type="button"
      onClick={ () => setActivePage(element) }
    >
      { element }
    </button>
  )
}

export default PaginationButton