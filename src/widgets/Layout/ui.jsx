import Header from './ui/Header'
import Content from './ui/Content'
import Footer from './ui/Footer'
import {Outlet} from 'react-router'
import NotificationBody from '@shared/ui/NotificationBody'
import Notification from '@shared/ui/NotificationBody/ui/Notification'
import {useSelector} from 'react-redux'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

const Layout = () => {
  const notifications = useSelector(state => state.NotificationReducer)

  return (
    <>
      <Header/>
      <Content>
        <Outlet/>
      </Content>
      <Footer/>
      <TransitionGroup component={NotificationBody}>
        {notifications.map(({ id, text }) => (
          <CSSTransition
            key={id}
            timeout={300}
            classNames='notification__item'
          >
            <Notification text={text}/>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  )
}

export default Layout