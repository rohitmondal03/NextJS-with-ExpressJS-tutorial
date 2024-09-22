import HomePage from './pages/home-page'
import AddUserPage from './pages/add-user-page'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/add-user"} element={<AddUserPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App