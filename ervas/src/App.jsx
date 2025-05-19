// Components
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//.

// Style
  import './App.css'
//.

// Pages
  import Home from './pages/Home'
 
  




function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          
                
        </Routes>
      </BrowserRouter>

      
    </>
  )
}

export default App
