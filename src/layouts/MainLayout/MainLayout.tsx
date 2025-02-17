import React from 'react'
import { NavLink, Route, Routes, useLocation } from 'react-router-dom'

interface Props {
  children?: React.ReactNode
}

const ExtraContent = () => {
  // Muỗn log được location thì dùng hook có tên useLocation
  const location = useLocation()
  console.log(location)
  return <div className='text-red-800'>Url is /about</div>
}

export default function MainLayout({ children }: Props) {
  return (
    <div className='grid min-h-screen grid-cols-4'>
      <aside className='col-span-1' aria-label='Sidebar'>
        <div className='h-full overflow-y-auto bg-gray-100 py-4 px-3 shadow-lg'>
          <ul className='space-y-2'>
            <li>
              <NavLink
                // to sẽ giúp mình đi tới nơi mà mình muốn
                to='/'
                // replace sẽ giúp nó không lưu lại lịch sử
                replace
                className={({ isActive }) => {
                  const activeClass = isActive ? 'bg-gray-300' : ''
                  return `flex items-center rounded-lg  p-2 text-base ${activeClass} font-normal text-gray-900 hover:bg-gray-300`
                }}
              >
                {/* Dùng actived cho children của NavLink */}
                {/* skill render props */}
                {({ isActive }) => {
                  return <span className={`ml-3 ${isActive ? 'font-bold' : ''}`}>Dashboard</span>
                }}
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/staff'
                replace
                className={({ isActive }) => {
                  const activeClass = isActive ? 'bg-gray-300' : ''
                  return `flex items-center rounded-lg p-2 text-base ${activeClass} font-normal text-gray-900 hover:bg-gray-300`
                }}
              >
                {/* Dùng actived cho children của NavLink */}
                {({ isActive }) => {
                  return <span className={`ml-3 ${isActive ? 'font-bold' : ''}`}>Staff</span>
                }}
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/about'
                replace
                className={({ isActive }) => {
                  const activeClass = isActive ? 'bg-gray-300' : ''
                  return `flex items-center rounded-lg p-2 text-base ${activeClass} font-normal text-gray-900 hover:bg-gray-300`
                }}
              >
                {/* Dùng actived cho children của NavLink */}
                {({ isActive }) => {
                  return <span className={`ml-3 ${isActive ? 'font-bold' : ''}`}>About</span>
                }}
              </NavLink>
            </li>
          </ul>
          {/* ở đây nếu mà mình fix cứng location thì tất cả các route con ở trong để có location là "/about" */}
          {/* <Routes location='/about'>
            <Route path='/about' element={<ExtraContent />} />
          </Routes> */}
        </div>
      </aside>
      <main className='col-span-3 h-full py-4 px-3'>{children}</main>
    </div>
  )
}

/**
 * Lưu ý vì react quan tâm chính là việc render. Chính vì vậy mà mình rất ngại dùng thẻ a
 * thay vào đó thì sẽ có hai thằng thay thế chính là Link và NavLink
 */

/**
 * thẻ a bây giờ sẽ thay bằng NavLink và prop "to" sẽ đưa mình đến nới mà mình muốn đến
 * đối với NavLink thì className có thể nhận vào callback. Nghĩa là tùy thuộc trạng thái actived
 * mà hiển thị các giá trị. Nói cách khác className có thể chứa cái callBack trong đó
 * **Đặc biệt ngoài className thì chúng ta còn có thể áp dụng kỹ thuật trên cho style để đánh css hoặc scss
 */
