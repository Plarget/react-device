import Header from './ui/Header'
import Content from './ui/Content'
import Footer from './ui/Footer'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <>
      <Header/>
      <Content>
        <Outlet/>
      </Content>
      <Footer/>
    </>
  )
}

export default Layout