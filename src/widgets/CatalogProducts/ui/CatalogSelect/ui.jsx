import Select from '@shared/ui/Select'

const CatalogSelect = (props) => {
  const {
    activeSelect,
    setActiveSelect,
  } = props

  return (
    <Select
      className="catalog-products__select"
      options={ [
        { id: 'sort-0', text: 'Популярные', value: 'popular' },
        { id: 'sort-1', text: 'Отзывы', value: 'popular' },
        { id: 'sort-2', text: 'Ценник', value: 'popular' },
      ] }
      activeSelect={ activeSelect }
      setActiveSelect={ setActiveSelect }
    />
  )
}

export default CatalogSelect