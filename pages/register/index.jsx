import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { Form, Input, Button, Row, Col, Divider } from 'antd'

import * as action from 'store/actions'
import SocialLogin from 'components/Auth/SocialButton'
const RegisterContainer = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const onLogin = () => {
    dispatch(action.login())
    router.replace('/')
  }

  return(
    <>
      <Row justify="center" align="middle" className="m-t-30">
        <Col xs={24} sm={24} md={12} lg={12} xl={8}>
          <h2>Register</h2>
          <SocialLogin text="Register" />
          <Divider plain>Or</Divider>
          <Form layout="vertical" name="register">
            <Form.Item label="Username" name="username" >
              <Input placeholder="Username" />
            </Form.Item>

            <Form.Item label="Email" name="email" >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item label="Password" name="password" >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item label="Confirmation Password" name="confirmation_password">
              <Input.Password placeholder="Confirmation Password" />
            </Form.Item>

            <Form.Item name="register_submit" onClick={onLogin}>
              <Button type="primary">Register</Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default RegisterContainer
