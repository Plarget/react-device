import classNames from 'classnames'

const Address = (props) => {
  const { className } = props

  return (
    <address className={ classNames('address', className) }>
      Санкт-Петербург, набережная реки Карповки, 5, литера П.
    </address>
  )
}

export default Address