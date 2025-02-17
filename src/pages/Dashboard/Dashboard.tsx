import { Link, useLocation } from 'react-router-dom'

export default function Dashboard() {
  // Giao tiếp với component NotFound
  const location = useLocation()
  // console.log(location)
  return (
    <div>
      <h1 className='mb-6 text-lg'>Dashboard</h1>
      <p className='text-cyan-800'>{location.state}</p>
      <Link to='/?sort=name&order=acending'>name</Link>
      <Link to='/?sort=age&order=acending'>age</Link>
      <Link to='/?sort=height&order=acending'>height</Link>
    </div>
    // to là chỉ tới đường link nào
    // còn một dạng nữa là Link xong bấm to thì sẽ render ra gì đó
  )
}
