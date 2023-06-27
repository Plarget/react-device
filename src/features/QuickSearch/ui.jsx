import Input from '@shared/ui/Input'
import { ReactSVG } from 'react-svg'
import './QuickSearch.scss'

const QuickSearch = () => {
  return (
    <form className="quick-search">
      <ReactSVG className='react-svg' src="/images/icons/search.svg"/>
      <Input
        className="quick-search__input"
        id="search"
        name="search"
        placeholder="Поиск по сайту"
      />
      <button
        className="quick-search__button"
        type="submit"
      >
        <span className='quick-search__wrapper'>
          Найти
        </span>
      </button>
    </form>
  )
}

export default QuickSearch