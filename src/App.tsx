import AddStaff from 'components/AddStaff'
import StaffItem from 'components/StaffItem'
import StaffList from 'components/StaffList'
import MainLayout from 'layouts/MainLayout'
import About from 'pages/About'
import Dashboard from 'pages/Dashboard'
import NotFound from 'pages/NotFound'
import Staff from 'pages/Staff'
import { Route, Routes } from 'react-router-dom'

// Mình muốn khi bấm vào tới đâu thì đuôi sẽ thay đổi và đồng thời
//render ra trang khác ==> xài Routes và chia ra các route khác nhau

// Việc này giúp cho đường dẫn ở đâu thì render ra nội dung đó

// Dynamic Route với id nó sẽ giúp cho việc truy cập vào từng staff cụ thể

// staff/add nó match với thằng staff/:id
//Câu hỏi đặt ra là tại sao nó biết được là add mà không phải :id
//==> do từ version 6 này nó sẽ tự động biết đc. Trước version 6 thì phải đặt theo tuần tự ưu tiên

// đường dẫn là "*" nghĩa là các đường dẫn còn lại thì hiện lên page 404

//Nested route hay còn gọi là route trong route
function App() {
  return (
    <div className='App'>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='/staff' element={<Staff />} />
          <Route path='/staff/:id' element={<StaffItem />} />
          <Route path='/staff/add' element={<AddStaff />} /> */}
          {/* Nested route */}
          <Route path='/staff/*' element={<Staff />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </MainLayout>
    </div>
  )
}

export default App
