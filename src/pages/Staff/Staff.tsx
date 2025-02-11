import { NavLink, Outlet } from 'react-router-dom'

export default function Staff() {
  return (
    <div>
      <h1 className='mb-6 text-lg'>Staff</h1>
      <div className='border-b border-gray-200 text-center text-sm font-medium text-gray-500  '>
        <ul className='-mb-px flex flex-wrap'>
          <li className='mr-2'>
            <NavLink
              to='/staff/list'
              className={({ isActive }) => {
                return `inline-block rounded-t-lg border-b-2 border-transparent p-4 ${
                  isActive
                    ? 'border-blue-600  text-blue-600' //
                    : ' hover:border-gray-300 hover:text-gray-600'
                } `
              }}
            >
              List
            </NavLink>
          </li>
          <li className='mr-2'>
            <NavLink
              to='/staff/add'
              className={({ isActive }) => {
                return `inline-block rounded-t-lg border-b-2 border-transparent p-4 ${
                  isActive
                    ? 'border-blue-600  text-blue-600' //
                    : ' hover:border-gray-300 hover:text-gray-600'
                } `
              }}
              aria-current='page'
            >
              Add
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Này giúp hiển thị cho nested route hiển thị các children của route cha*/}
      <Outlet context={{ profile: { name: 'Nhan' } }} />
      {/* Những cái nội dung này sẽ nhận ở các component tương ứng thông qua hook */}
    </div>
  )
}
