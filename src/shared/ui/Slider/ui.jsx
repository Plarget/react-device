import { Swiper } from 'swiper/react'
import 'swiper/css';

const Slider = (props) => {
  const {
    children,
    ...rest
  } = props
  return (
    <Swiper
      { ...rest }
    >
      { children }
    </Swiper>
  )
}

export default Slider