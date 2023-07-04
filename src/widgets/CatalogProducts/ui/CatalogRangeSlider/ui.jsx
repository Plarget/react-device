import RangeSliderCustom from '@shared/ui/RangeSliderCustom'

const CatalogRangeSlider = (props) => {
  const {
    rangeValue,
    setRangeValue,
  } = props


  return (

    <RangeSliderCustom
      className="catalog-products__form-section"
      classNameLabel="catalog-products__form-label label label--rubick"
      allowCross={ false }
      label="Стоимость"
      id="price"
      minMax={ [0, 8000] }
      value={ rangeValue }
      onChange={ setRangeValue }
    />
  )
}

export default CatalogRangeSlider