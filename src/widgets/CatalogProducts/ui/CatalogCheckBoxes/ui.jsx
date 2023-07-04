import CheckBoxesGroup from '@shared/ui/CheckBoxesGroup'

const CatalogCheckBoxes = (props) => {
  const { register } = props

  return (
    <CheckBoxesGroup
      className="catalog-products__form-section"
      classNameLabel="catalog-products__form-label label label--rubick"
      register={ register }
      label="Цвет"
      checkboxes={ [
        { name: 'black', text: 'Черный', isChecked: true },
        { name: 'white', text: 'Белый', isChecked: true },
        { name: 'blue', text: 'Синий' },
        { name: 'red', text: 'Красный' },
        { name: 'pink', text: 'Розовый' },
      ] }

    />
  )
}

export default CatalogCheckBoxes