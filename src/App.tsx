import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Jaca" element={<Layout/>}>
          <Route index element={<h2>Home</h2>} />
          <Route path="/Jaca/chores" element={<h2>Chores List</h2>}/>
          <Route path="/Jaca/chores/new" element={<h2>New Chore</h2>} />
          <Route path="/Jaca/chores/*" element={<h2>Edit Chore</h2>} />
        </Route>
        <Route path="*" element={<h1>No Page</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
