import Input from '@shared/ui/Input'
import Button from '@shared/ui/Button/ui'
import { ReactSVG } from 'react-svg'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import './Subscribe.scss'

const schema = yup.object({
  subscribe_email: yup.string().email('Введен невернывй E-mail').required('Заполните поле')
})
const Subscribe = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = (data) => {
    console.log(data)
    reset()
  }


  return (
    <section className="subscribe">
      <div className="subscribe__inner container">
        <div className="subscribe__body">
          <article className="subscribe__about">
            <h2 className="subscribe__title title">Подпишитесь на рассылку</h2>
            <div className="subscribe__text text">
              <p>Еженедельный дайджест с обзорами новинок, длительными тест-драйвами, распаковками, а также акции,
                спецпредложения и вот это вот всё.</p>
            </div>
          </article>
          <div className="subscribe__actions">
            <form className="subscribe__form" onSubmit={ handleSubmit(onSubmit) } noValidate>
              <Input
                className="subscribe__form-wrapper"
                classNameControl="subscribe__form-input"
                register={ register }
                registerName="subscribe_email"
                error={ errors.subscribe_email?.message }
                id="subscribe_email"
                placeholder="Ваш e-mail"
                type="email"
              />
              <Button className="subscribe__form-button button--gray label" type="submit">Подписаться</Button>
            </form>
            <div className="subscribe__subtext text">
              <ReactSVG className="react-svg" src="/images/icons/check.svg"/>
              Это&nbsp;бесплатно
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subscribe