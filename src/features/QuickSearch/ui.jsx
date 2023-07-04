import Input from '@shared/ui/Input'
import { ReactSVG } from 'react-svg'
import { useRef, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import useClickOutside from '@shared/hooks/useClickOutside'
import { useQuery } from 'react-query'
import './QuickSearch.scss'

const fetchQuery = async (query) => {
  const url = `https://jsonplaceholder.typicode.com/posts?_limit=10&query=${ query }`
  const { data } = await axios.get(url)
  return data
}
const QuickSearch = () => {
  const [value, setValue] = useState('')
  useQuery(
    ['query', value],
    async () => {
      const response = await fetchQuery(value)
      if (value === '') {
        setResult([])
      } else {
        setResult(response)
      }

      return response
    },
    { keepPreviousData: true, }
  )
  const [result, setResult] = useState([])
  const hasResult = result.length > 0
  const ref = useRef(null)
  useClickOutside(() => setResult([]), ref)

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
  }

  const reset = () => {
    setValue('')
  }

  return (
    <form
      className="quick-search"
      onSubmit={ onSubmit }
      ref={ ref }
    >
      <ReactSVG className="react-svg" src="/images/icons/search.svg"/>
      <Input
        className="quick-search__input"
        id="search"
        name="search"
        type="search"
        autoComplete="off"
        value={ value }
        placeholder="Поиск по сайту"
        onChange={ onChange }
      />
      <button
        className="quick-search__button"
        type="submit"
      >
        <span className="quick-search__wrapper">
          Найти
        </span>
      </button>
      { hasResult && (
        <ul className="quick-search__list">
          { result.map(({ id, title }) => (
              <li className="quick-search__item" key={ id }>
                <Link className="quick-search__link" to="query" onClick={ reset }>
                  <mark className="quick-search__mark">{ title }</mark>
                </Link>
              </li>
            )
          ) }
        </ul>
      ) }
    </form>
  )
}

export default QuickSearch