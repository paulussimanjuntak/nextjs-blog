import { useRouter } from 'next/router'

import UserLayout from './user'
import AdminLayout from './admin'

const LayoutContainer = ({ children }) => {
  const router = useRouter()

  let layout = <UserLayout>{children}</UserLayout>
  if(router.pathname.startsWith("/admin")) layout = <AdminLayout>{children}</AdminLayout>

  return layout
}

export default LayoutContainer
