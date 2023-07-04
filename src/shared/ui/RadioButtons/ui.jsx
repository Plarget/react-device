import classNames from 'classnames'
import { useState } from 'react'
import './RadioButtons.scss'

const RadioButtons = (props) => {
  const {
    className,
    classNameLabel,
    register,
    registerName,
    label,
    radios=[],
  } = props

  const defaultCheckedRadio = radios.find(({ isChecked }) => isChecked) || radios[0]
  const [checkedRadioId, setCheckedRadioId] = useState(defaultCheckedRadio.id)

  return (
    <div className={ classNames('radio', className) }>
      { label && <label className={ classNames('radio__label', classNameLabel) }>{ label }</label> }
      <div className="radio__body">
        { radios.map((element) => {
          return (
            <div className="radio__wrapper" key={ element.id }>
              <input
                className="radio__control"
                { ...register(registerName) }
                id={ element.id }
                value={ element.value }
                type="radio"
                checked={ element.id === checkedRadioId }
                onChange={ () => setCheckedRadioId(element.id) }
              />
              <label className="radio__control-label" htmlFor={ element.id }>{ element.text }</label>
            </div> )
        }) }
      </div>
    </div>
  )
}

export default RadioButtons