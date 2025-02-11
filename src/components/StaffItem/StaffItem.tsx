import { useParams } from 'react-router-dom'

export default function StaffItem() {
  // Nếu ở đây mà mình muốn nhận được cái param từ url
  //thì phải thông qua hook này
  const { id } = useParams()
  console.log(id)

  // const params = useParams()
  // console.log(params)
  //staff/:id/:address
  //{id: '1', address: 'vietnam'}
  return <div>StaffItem: {id}</div>
}
