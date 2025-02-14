import { useLocation } from 'react-router-dom'

export default function Dashboard() {
  // Giao tiếp với component NotFound
  const location = useLocation()
  console.log(location)
  return (
    <div>
      <h1 className='mb-6 text-lg'>Dashboard</h1>
    </div>
  )
}
