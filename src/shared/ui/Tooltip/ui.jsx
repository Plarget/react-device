import useToggle from '@shared/hooks/useToggle'
import classNames from 'classnames'
import {useRef} from 'react'
import useClickOutside from '@shared/hooks/useClickOutside'
import './Tooltip.scss'

const Tooltip = (props) => {
  const {
    renderTriggerComponent,
    children,
  } = props

  const {
    value: isActiveTooltip,
    toggleState: toggleActiveTooltip,
    setValue: setActiveTooltip
  } = useToggle()

  const ref = useRef()
  useClickOutside(() => setActiveTooltip(false), ref)

  return (
    <div className={classNames(
      'tooltip',
      { 'is-active': isActiveTooltip }
    )} ref={ref}>
      {renderTriggerComponent({ onClick: toggleActiveTooltip })}
      <div className="tooltip__body">
        {children}
      </div>
    </div>
  )
}

export default Tooltip