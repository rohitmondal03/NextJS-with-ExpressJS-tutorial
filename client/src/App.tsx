import { Route } from 'wouter'

import HomePage from './pages/home-page'
import './App.css'
import AddDataPage from './pages/add-data-page'

function App() {
  return (
    <div>
      <Route path={"/"} component={HomePage} />
      <Route path={"/add-data"} component={AddDataPage} />
    </div>
  )
}

export default App