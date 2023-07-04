import { withProviders } from './providers'
import { Route, Routes } from 'react-router'
import Layout from '@widgets/Layout'
import HomePage from '@pages/HomePage'
import Error404Page from '@pages/Error404Page'
import CatalogSelfiesPage from '@pages/CatalogSelfiesPage'
import './styles/index'

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={ <Layout/> }>
          <Route index element={ <HomePage/> }/>
          <Route path="catalog/monopod-for-selfi" element={ <CatalogSelfiesPage/> }/>
          <Route path="*" element={ <Error404Page/> }/>
        </Route>
      </Routes>
    </div>
  )
}

export default withProviders(App)
