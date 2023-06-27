import './Hint.scss'
import classNames from 'classnames'

const Hint = (props) => {
  const {
    className,
    children,
    text,
  } = props

  return (
    <div className={ classNames('hint', className) }>
      <div className="hint__body">
        { text }
      </div>
      <div className="hint__trigger">
        { children }
      </div>
    </div>
  )
}

export default Hint