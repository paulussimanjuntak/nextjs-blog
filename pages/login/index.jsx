import { useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { Form, Input, Button, Row, Col, Divider, Modal } from 'antd'

import * as action from 'store/actions'
import SocialLogin from 'components/Auth/SocialButton'

const Login = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const [titleText, setTitleText] = useState("")
  const [showModal, setShowModal] = useState(false)

  const onLogin = () => {
    dispatch(action.login())
    router.replace('/')
  }

  const onShowModal = text => {
    setShowModal(true)
    setTitleText(text)
  }

  const onCloseModal = () => {
    setShowModal(false)
    setTitleText("")
  }

  return(
    <>
      <Row justify="center" align="middle" className="m-t-30">
        <Col xs={24} sm={24} md={12} lg={12} xl={8}>
          <h2>Login</h2>
          <SocialLogin text="Sign in" />
          <Divider plain>Or</Divider>
          <Form layout="vertical" name="login-layout">
            <Form.Item label="Email" name="email" >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item 
              name="password"
              className="input-with-right-child"
              label={
                <div className="w-100">
                  <span>Password</span>
                  <a className="float-right"
                    onClick={() => onShowModal("Forgot Password")}
                  >
                    Forgot password ?
                  </a>
                </div>
              } 
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item name="login">
              <Button type="primary" onClick={onLogin}>Login</Button>
              <Button 
                type="link" 
                onClick={() => onShowModal("Resend email verification")}
              >
                Resend verification
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <Modal
        centered
        title={titleText}
        visible={showModal}
        onOk={onCloseModal}
        onCancel={onCloseModal}
        footer={[
          <Button key="back" onClick={onCloseModal}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={onCloseModal}>
            Send
          </Button>
        ]}
      >
        <Form layout="vertical" name="forgot-password">
          <Form.Item label="Email Address" name="email" className="m-b-5">
            <Input placeholder="Email Address" />
          </Form.Item>
        </Form>
      </Modal>
    <style jsx>{`
        :global(.input-with-right-child label) {
          width: 100%!important;
        }
      `}</style>
    </>
  )
}

export default Login
