import RadioButtons from '@shared/ui/RadioButtons'

const CatalogRadioButtons = (props) => {
  const { register } = props

  return (
    <RadioButtons
      className="catalog-products__form-section"
      classNameLabel="catalog-products__form-label label label--rubick"
      register={ register }
      registerName="bluetooth"
      label="Bluetooth"
      radios={ [
        { id: 'bluetooth-0', text: 'Есть', value: 'yes' },
        { id: 'bluetooth-1', text: 'Нет', value: 'no' },
      ] }
    />
  )
}

export default CatalogRadioButtons