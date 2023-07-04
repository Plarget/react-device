import AboutTabs from '@widgets/AboutCompany/ui/AboutTabs'
import DeliveryBanner from '@widgets/AboutCompany/ui/DeliveryBanner'
import GuaranteeBanner from '@widgets/AboutCompany/ui/GuaranteeBanner'
import CreditBanner from '@widgets/AboutCompany/ui/CreditBanner/ui'
import './AboutCompany.scss'

const AboutCompany = () => {

  return (
    <section className="about-company">
      <div className="about-company__inner">
        <div className="about-company__body container">
          <AboutTabs
            items={[
              {
                id: 'delivery',
                title: 'Доставка',
                content: <DeliveryBanner/>,
              },
              {
                id: 'guarantee',
                title: 'Гарантия',
                content: <GuaranteeBanner/>,
              },
              {
                id: 'credit',
                title: 'Кредит',
                content: <CreditBanner/>,
              },
            ]}
          />
        </div>
      </div>
    </section>
  )
}

export default AboutCompany