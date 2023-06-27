import Slider from '@shared/ui/Slider'
import { SwiperSlide } from 'swiper/react'
import Button from '@shared/ui/Button/ui'
import { Navigation, Pagination } from 'swiper'
import IconButton from '@shared/ui/IconButton'
import { ReactSVG } from 'react-svg'
import 'swiper/css/pagination'
import './PreviewProducts.scss'

const PreviewProducts = () => {
  return (
    <section className="preview-products">
      <div className="preview-products__inner container">
        <div className="preview-products__header">
          <div className="preview-products__header-counter">
            01
          </div>
        </div>
        <div className="preview-products__body">
          <div className="preview-products__slider">
            <Slider
              modules={ [Navigation, Pagination] }
              pagination={ {
                clickable: true,
                el: '.preview-products__pagination',
                bulletElement: 'button',
              } }
              navigation={ {
                nextEl: '.preview-products__button-next',
                prevEl: '.preview-products__button-prev',
              } }
            >
              <SwiperSlide>
                <img
                  className="preview-products__image"
                  src="/images/preview/quadrocopter.png"
                  alt="drone"
                  width="527" height="334" loading="lazy"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="preview-products__image"
                  src="/images/preview/quadrocopter.png"
                  alt="drone"
                  width="527" height="334" loading="lazy"
                />
              </SwiperSlide>
              <IconButton className="preview-products__button-prev">
                <ReactSVG className="react-svg" src="/images/icons/navigation-arrow.svg"/>
              </IconButton>
              <IconButton className="preview-products__button-next">
                <ReactSVG className="react-svg" src="/images/icons/navigation-arrow.svg"/>
              </IconButton>
            </Slider>
          </div>
          <article className="preview-products__info">
            <h2 className="preview-products__title title">Порхает как бабочка, жалит как пчела!</h2>
            <div className="preview-products__description text">
              <p>Этот обычный, на первый взгляд, квадрокоптер оснащен мощным лазером, замаскированным под стандартную
                камеру.</p>
            </div>
            <Button className="preview-products__button button--line label">
              Подробнее
            </Button>
            <div className="preview-products__stats">
              <div className="preview-products__stats-item">
                <h3 className="preview-products__stats-stat">800 м</h3>
                <div className="preview-products__stats-detail text text--small">Дальность полета</div>
              </div>
              <div className="preview-products__stats-item">
                <h3 className="preview-products__stats-stat">50 м</h3>
                <div className="preview-products__stats-detail text text--small">Радиус поражения</div>
              </div>
            </div>
          </article>
        </div>
        <div className="preview-products__pagination"></div>
      </div>
    </section>
  )
}

export default PreviewProducts