import AddStaff from 'components/AddStaff'
import StaffItem from 'components/StaffItem'
import StaffList from 'components/StaffList'
import { NavLink, Outlet, Route, Routes } from 'react-router-dom'

export default function Staff() {
  return (
    <div>
      <h1 className='mb-6 text-lg'>Staff</h1>
      <div className='border-b border-gray-200 text-center text-sm font-medium text-gray-500  '>
        <ul className='-mb-px flex flex-wrap'>
          <li className='mr-2'>
            <NavLink
              to='/staff'
              // end làm cho thằng nào là thằng con thì actived và thằng cho thì không
              //nghĩa là chỉ có 1 trong 2 actived
              end
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

      <Routes>
        <Route path=':id' element={<StaffItem />} />
        <Route path='add' element={<AddStaff />} />
        {/* index giúp cho vào thằng trang đó luôn nghĩa là với staff thì cũng hiển thị component đó ra luôn */}
        <Route index element={<StaffList />} />
      </Routes>

      {/* Lưu ý nếu như xài cách trên thì Outlet sẽ không còn hiệu nghiệm nữa. Và cũng như không truyền vô được context */}

      {/* Này giúp hiển thị cho nested route hiển thị các children của route cha*/}
      {/* <Outlet context={{ profile: { name: 'Nhan' } }} /> */}
      {/* Những cái nội dung này sẽ nhận ở các component tương ứng thông qua hook */}
    </div>
  )
}
