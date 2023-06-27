import classNames from 'classnames'
import './Input.scss'

const Input = (props) => {
  const {
    className,
    classNameControl,
    register,
    registerName,
    id,
    error,
    ...reset
  } = props

  return (
    <div className={ classNames('input', className) }>
      <input
        className={ classNames('input__control', classNameControl) }
        { ...register?.(registerName) }
        id={ id }
        { ...reset }
      />
      { error && ( <div className="input__error">{ error }</div> ) }
    </div>
  )
}

export default Input