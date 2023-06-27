import classNames from 'classnames'
import './Button.scss'

const Button = (props) => {
  const {
    className,
    children,
    ...reset
  } = props

  return (
    <button
      className={ classNames('button', className) }
      type="button"
      { ...reset }
    >
      { children }
    </button>
  )
}

export default Button