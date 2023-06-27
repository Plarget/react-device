import './IconButton.scss'
import classNames from 'classnames'

const IconButton = (props) => {
  const {
    className,
    children,
    ...rest
  } = props
  return (
    <button
      className={ classNames('icon-button', className)}
      { ...rest }
    >
      { children }
    </button>
  )
}

export default IconButton