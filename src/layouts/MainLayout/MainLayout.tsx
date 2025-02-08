import React from 'react'
import { NavLink } from 'react-router-dom'

interface Props {
  children?: React.ReactNode
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
                <span className='ml-3 font-bold'>Dashboard</span>
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
                <span className='ml-3'>Staff</span>
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
                <span className='ml-3'>About</span>
              </NavLink>
            </li>
          </ul>
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
 */
