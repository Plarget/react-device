import { withProviders } from './providers'
import { Route, Routes } from 'react-router'
import Layout from '@widgets/Layout'
import HomePage from '@pages/HomePage'
import Error404Page from '@pages/Error404Page'
import './styles/index'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Layout/> }>
          <Route index element={ <HomePage/> }/>
          <Route path="*" element={ <Error404Page/> }/>
        </Route>
      </Routes>
    </div>
  )
}

export default withProviders(App)
