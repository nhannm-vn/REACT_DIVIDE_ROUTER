import MainLayout from 'layouts/MainLayout'
import About from 'pages/About'
import Dashboard from 'pages/Dashboard'
import StaffList from 'pages/StaffList'
import { Route, Routes } from 'react-router-dom'

// Mình muốn khi bấm vào tới đâu thì đuôi sẽ thay đổi và đồng thời
//render ra trang khác ==> xài Routes và chia ra các route khác nhau

// Việc này giúp cho đường dẫn ở đâu thì render ra nội dung đó

function App() {
  return (
    <div className='App'>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/about' element={<About />} />
          <Route path='/staff' element={<StaffList />} />
        </Routes>
      </MainLayout>
    </div>
  )
}

export default App
