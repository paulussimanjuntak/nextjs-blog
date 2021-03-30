import { Layout, Menu } from 'antd'
import { useRouter } from 'next/router'
import { UserOutlined, UnlockOutlined } from '@ant-design/icons'
import Link from 'next/link'

const Profile = ({children}) => {
  const router = useRouter()

  return(
    <>
      <Layout className="m-t-20">
        <Layout.Content style={{ padding: '0' }}>
          <Layout className="site-layout-background">
            <Layout.Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                inlineIndent="10"
                style={{ height: '100%' }}
                selectedKeys={[router.pathname]}
              >
                <Menu.Item key="/profile" icon={<UserOutlined />}>
                  <Link href="/profile">
                    Profile
                  </Link>
                </Menu.Item>
                <Menu.Item key="/profile/add-password" icon={<UnlockOutlined />}>
                  <Link href="/profile/add-password">
                    Add Password
                  </Link>
                </Menu.Item>
                <Menu.Item key="/profile/password" icon={<UnlockOutlined />}>
                  <Link href="/profile/password">
                    Change Password
                  </Link>
                </Menu.Item>
              </Menu>
            </Layout.Sider>
            <Layout.Content style={{ padding: '15px' }}>
              {children}
            </Layout.Content>
          </Layout>
        </Layout.Content>
      </Layout>
    </>
  )
}

export default Profile
