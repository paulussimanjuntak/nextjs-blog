import { Form, Input, Button, Row, Col } from 'antd'

const ResetPassword = () => {
  return(
    <>
      <Row justify="center" align="middle" className="m-t-30">
        <Col xs={24} sm={24} md={12} lg={12} xl={8}>
          <h2>Reset Password</h2>
          <Form layout="vertical" name="reset-password">
            <Form.Item label="Email" name="email" >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item 
              name="password"
              label="Password"
              className="input-with-right-child"
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item name="resetpassword">
              <Button type="primary">Reset Password</Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default ResetPassword
