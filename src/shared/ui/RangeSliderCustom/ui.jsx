import classNames from 'classnames'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './RangeSliderCustom.scss'

const RangeSliderCustom = (props) => {
  const {
    className,
    classNameLabel,
    register,
    registerName,
    id,
    minMax,
    value,
    onChange,
    label,
    ...rest
  } = props

  return (
    <div className={ classNames('range-slider-custom', className) }>
      { label
        &&
        <label
          className={ classNames('range-slider-custom__label', classNameLabel) }
          htmlFor={ id }
        >
          { label }
        </label>
      }
      <Slider
        range
        className="range-slider-custom__control"
        name='dasd'
        id={ id }
        min={ minMax?.[0] }
        max={ minMax?.[1] }
        value={ value }
        onChange={ onChange }
        { ...rest }
      />
      <div className="range-slider-custom__minmax">
        <span>от {value[0]}</span>
        <span>до {value[1]}</span>
      </div>
    </div>
  )
}

export default RangeSliderCustom