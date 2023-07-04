import classNames from 'classnames'
import CheckBox from '@shared/ui/CheckBoxesGroup/ui/CheckBox'
import './CheckBoxesGroup.scss'

const CheckBoxesGroup = (props) => {
  const {
    register,
    label,
    checkboxes,
    className,
    classNameLabel,
  } = props

  return (
    <div className={ classNames('checkbox-group', className) }>
      { label && <label className={ classNames('checkbox-group__label', classNameLabel) }>{ label }</label> }
      <div className="checkbox-group__body">
        { checkboxes.map((element) => {
          return (
            <CheckBox
              register={ register }
              name={ element.name }
              text={ element.text }
              key={ element.name }
              isCheckedDefault={ element.isChecked }
            />
          )
        })
        }
      </div>
    </div>
  )
}

export default CheckBoxesGroup