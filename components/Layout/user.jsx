import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { Layout, Menu, Grid, Avatar, Dropdown } from 'antd'

import Link from 'next/link'
import * as action from 'store/actions'

const routes = [
  { title: "Home", path: "/", key: "home" },
  { title: "Articles", path: "/articles", key: "articles" },
]

const LayoutContainer = ({ children }) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { md } = Grid.useBreakpoint()

  const user = useSelector(state => state.auth.user)

  const onLogout = () => {
    dispatch(action.logout())
    router.replace('/')
  }

  const authMenu = (
    <Menu>
      <Menu.Item key="/admin" className="d-md-none">
        <Link href="/admin">
          Admin
        </Link>
      </Menu.Item>
      <Menu.Item key="/profile" className="d-md-none">
        <Link href="/profile">
          Profile
        </Link>
      </Menu.Item>
      <Menu.Item onClick={onLogout}>
        Logout
      </Menu.Item>
    </Menu>
  )

  return(
    <>
      <Layout id="components-layout-demo-fixed">
        <Layout.Header style={{ position: 'fixed', zIndex: 1030, width: '100%' }}>
          <div className="logo">
            <h1>Golang Blog</h1>
          </div>
          <Menu 
            theme="dark" 
            className="navbar"
            mode={md ? "horizontal" : "inline"}
            selectedKeys={['/'+router.pathname.split('/')[1]]}
          >
            {routes.map(route => (
              <Menu.Item key={route.path} className="d-md-none">
                <Link href={route.path}>
                  {route.title}
                </Link>
              </Menu.Item>
            ))}
            {user ? (
              <Dropdown overlay={authMenu} placement="bottomRight" className="m-l-20">
                <Avatar src="https://i.pravatar.cc/150?u=1" />
              </Dropdown>
            ):(
              <>
              <Menu.Item key="/login" className="d-md-none">
                <Link href="/login">
                  Login
                </Link>
              </Menu.Item>
              <Menu.Item key="/register" className="d-md-none">
                <Link href="/register">
                  Register
                </Link>
              </Menu.Item>
              </>
            )}
          </Menu>
        </Layout.Header>
        <Layout.Content style={{ padding: '0 50px', marginTop: 64, backgroundColor: '#fff' }}>
          {children}
        </Layout.Content>
      </Layout>

      <style jsx>{`
      :global(.logo) {
        float: left;
      }
      :global(.logo h1) {
        color: white;
        margin-bottom: 0;
      }
      :global(.navbar) {
        float: right;
      }
      @media (max-width: 767px) {
        :global(.d-md-none) {
          display: none!important;
        }
      }
      `}</style>
    </>
  )
}

export default LayoutContainer
