import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  FolderOpenOutlined,
  DiffOutlined,
  HomeOutlined
} from '@ant-design/icons'
import Link from 'next/link'

const AdminLayout = ({children}) => {
  const router = useRouter()
  const [collapsed, setCollapsed] = useState(false)

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  let selectedKeys = router.pathname
  if(router.pathname.split('/')[router.pathname.split('/').length - 1].startsWith('[')) {
    let newKey = router.pathname.split('/')
    newKey.pop()
    selectedKeys = newKey.join("/")
  }

  return(
    <>
      <Layout>
        <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu 
            theme="dark" 
            mode="inline" 
            defaultSelectedKeys={['1']}
            selectedKeys={[selectedKeys]}
          >
            <Menu.Item key="/" icon={<HomeOutlined />}>
              <Link href="/">
                Home
              </Link>
            </Menu.Item>
            <Menu.Item key="/admin/articles" icon={<FolderOpenOutlined />}>
              <Link href="/admin/articles">
                Articles
              </Link>
            </Menu.Item>
            <Menu.Item key="/admin/articles/new" icon={<DiffOutlined />}>
              <Link href="/admin/articles/new">
                New Articles
              </Link>
            </Menu.Item>
          </Menu>
        </Layout.Sider>
        <Layout className="site-layout">
          <Layout.Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Layout.Header>
          <Layout.Content
            style={{ margin: '15px', padding: 15, height: '100%', minHeight: '100vh' }}
          >
            {children}
          </Layout.Content>
        </Layout>
      </Layout>

      <style global jsx>{`
        :global(.trigger) {
          padding: 24px;
        }
        #components-layout-demo-custom-trigger .trigger {
          padding: 24px;
          font-size: 18px;
          line-height: 64px;
          cursor: pointer;
          transition: color 0.3s;
        }

        #components-layout-demo-custom-trigger .logo {
          height: 32px;
          margin: 16px;
          background: rgba(255, 255, 255, 0.3);
        }

        .site-layout .site-layout-background {
          background: #fff;
        }
      `}</style>
    </>
  )
}

export default AdminLayout
