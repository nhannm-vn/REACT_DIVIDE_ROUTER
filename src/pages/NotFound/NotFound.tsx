import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

/*
  Navigate giúp khi tới trang lỗi thì quay về trang nào đó
  hoặc sau bao lâu thì quay về đâu đó
  Nếu không dùng thẻ Navigate thì có thể dùng hook useNavigate
  trong navigate nếu truyền -1 thì sau một khoảng nó tự quay về trang trước đó
*/

function NotFound() {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate('/', {
        state: 'Redirect from notfound'
      })
    }, 2000)
  }, [navigate])
  return <div>Not Found</div>
}

export default NotFound
