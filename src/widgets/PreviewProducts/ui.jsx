import Slider from '@shared/ui/Slider'
import {SwiperSlide} from 'swiper/react'
import Button from '@shared/ui/Button/ui'
import {Navigation, Pagination} from 'swiper'
import IconButton from '@shared/ui/IconButton'
import {ReactSVG} from 'react-svg'
import productsPreview from '@shared/data/productsPreview'
import {useState} from 'react'
import 'swiper/css/pagination'
import './PreviewProducts.scss'

const PreviewProducts = () => {
  const [activeSlide, setActiveSlide] = useState(productsPreview[0])
  const activeNumSlide = '0' + (productsPreview.indexOf(activeSlide) + 1)
  const hasDetail = activeSlide.descriptionList?.length > 0

  return (
    <section className="preview-products">
      <div className="preview-products__inner container">
        <div className="preview-products__header">
          <div className="preview-products__header-counter">
            {activeNumSlide}
          </div>
        </div>
        <div className="preview-products__body">
          <div className="preview-products__slider">
            <Slider
              modules={[Navigation, Pagination]}
              pagination={{
                clickable: true,
                el: '.preview-products__pagination',
                bulletElement: 'button',
              }}
              navigation={{
                nextEl: '.preview-products__button-next',
                prevEl: '.preview-products__button-prev',
              }}
              onSlideChangeTransitionEnd={(swiper) => setActiveSlide(productsPreview[swiper.activeIndex])}
            >
              {productsPreview.map(({ img, id }) => (
                  <SwiperSlide key={id}>
                    <img
                      className="preview-products__image"
                      src={img}
                      alt="drone"
                      width="527" height="334" loading="lazy"
                    />
                  </SwiperSlide>
                )
              )}
              <IconButton className="preview-products__button-prev">
                <ReactSVG className="react-svg" src="/images/icons/navigation-arrow.svg"/>
              </IconButton>
              <IconButton className="preview-products__button-next">
                <ReactSVG className="react-svg" src="/images/icons/navigation-arrow.svg"/>
              </IconButton>
            </Slider>
          </div>
          <article className="preview-products__info">
            <h2 className="preview-products__title title">{activeSlide.name}</h2>
            <div className="preview-products__description text">
              <p>{activeSlide.description}</p>
            </div>
            <Button className="preview-products__button button--line label">
              Подробнее
            </Button>
            {hasDetail &&
              <dl className="preview-products__stats">
                {activeSlide.descriptionList.map(({ name, detail, id }) => (
                  <div className="preview-products__stats-item" key={id}>
                    <dt className="preview-products__stats-stat">{detail}</dt>
                    <dd className="preview-products__stats-detail text text--small">{name}</dd>
                  </div>
                ))}
              </dl>}
          </article>
        </div>
        <div className="preview-products__pagination"></div>
      </div>
    </section>
  )
}

export default PreviewProducts