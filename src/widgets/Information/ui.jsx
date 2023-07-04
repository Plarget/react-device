import Button from '@shared/ui/Button/ui'
import Address from '@shared/ui/Address'
import PhoneLink from '@shared/ui/PhoneLink/ui'
import './Information.scss'

const Information = () => {
  return (
    <section className="information">
      <div className="information__body container">
        <article className="information__about information__item">
          <h2 className="information__item-title title">О нас</h2>
          <div className="information__item-body">
            <div className="information__item-text text">
              <p>Огромный выбор гаджетов не оставит равнодушным гика, который есть в каждом из нас.</p>
              <p>Мы можем доставить ваш товар в самые отдалённые уголки России транспортными компаниями:</p>
            </div>
            <ul className="information__about-list">
              <li className="information__about-item">
                <div className="information__about-label label label--rubick">Меловые линии</div>
              </li>
              <li className="information__about-item">
                <div className="information__about-label label label--rubick">СДИК</div>
              </li>
              <li className="information__about-item">
                <div className="information__about-label label label--rubick">ТоксБерри</div>
              </li>
            </ul>
            <Button className="information__about-button button--line label">Подробнее о нас</Button>
          </div>
        </article>
        <article className="information__contact information__item">
          <h2 className="information__item-title title">Контакты</h2>
          <div className="information__item-body">
            <div className="information__item-text text">
              <p>Вы можете забрать товар сами, заехав в наш офис. <br/>Заодно сможете проверить работоспособность
                покупки.</p>
            </div>
            <div className="information__contact-place">
              <h3 className="information__item-label">Интернет-магазин «Девайс»</h3>
              <div className="information__contact-address text">
                <Address/>
                <PhoneLink/>
              </div>
            </div>
            <div className="information__contact-time">
              <h3 className="information__item-label">Интернет-магазин «Девайс»</h3>
              <div className="information__contact-time-text text">
                <p>пн—пт: с 10:00 до 22:00</p>
                <p>сб—вс: с 10:00 до 19:00</p>
              </div>
            </div>
            <Button className="information__contact-button button--line label">Напишите нам</Button>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Information