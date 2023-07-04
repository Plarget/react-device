import useToggle from '@shared/hooks/useToggle'
import classNames from 'classnames'
import { useEffect, useRef } from 'react'
import useClickOutside from '@shared/hooks/useClickOutside'
import { ReactSVG } from 'react-svg'
import './Select.scss'

const Select = (props) => {
  const {
    className,
    options = [],
    activeSelect,
    setActiveSelect,
  } = props
  const {
    value: isOpenTooltip,
    toggleState: toggleIsOpenTooltip,
    setValue: setIsOpenTooltip
  } = useToggle(false)
  const ref = useRef(null)
  useEffect(() => {
    setActiveSelect(options[0])
    // eslint-disable-next-line
  }, [])

  useClickOutside(() => setIsOpenTooltip(false), ref)
  const clickOption = (text) => {
    setActiveSelect(text)
  }

  return (
    <div
      className={
        classNames('select', { 'is-opened': isOpenTooltip }, className)
      }
      onClick={ toggleIsOpenTooltip }
      ref={ ref }
    >
      <div className="select__body">
        <div className="select__active-option">{ activeSelect?.text }</div>
        <ReactSVG className="react-svg" src="/images/icons/arrow-select.svg"/>
      </div>
      <div className="select__tooltip">
        { options.map((element) => (
          <button
            className={ classNames('select__option', { 'is-active': element.id === activeSelect?.id }) }
            onClick={ () => clickOption(element) }
            key={ element.id }
          >
            { element.text }
          </button>
        )) }
      </div>
    </div>
  )
}

export default Select