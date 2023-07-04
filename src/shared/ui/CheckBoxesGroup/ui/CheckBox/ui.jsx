import { useState } from 'react'
import './CheckBox.scss'

const CheckBox = (props) => {
  const {
    register,
    name,
    text,
    isCheckedDefault,
  } = props
  const [isChecked, setIsChecked] = useState(isCheckedDefault)

  return (
    <div className="checkbox">
      <input
        className="checkbox__control"
        { ...register(name) }
        id={ name }
        checked={ !!isChecked }
        onChange={ () => setIsChecked(!isChecked) }
        type="checkbox"
      />
      <label className="checkbox__label" htmlFor={ name }>{ text }</label>
    </div>
  )
}

export default CheckBox