import { Form, Input, Button, Row, Col, Space } from 'antd'
import Link from 'next/link'

const ForgotPassword = () => {
  return(
    <>
      <Row justify="center" align="middle" className="m-t-30">
        <Col xs={24} sm={24} md={12} lg={12} xl={8}>
          <h2>Forgot Password</h2>
          <Form layout="vertical" name="forgot-password">
            <Form.Item label="Email Address" name="email">
              <Input placeholder="Email Address" />
            </Form.Item>

            <Form.Item name="forgotpassword">
              <Space>
                <Button type="primary">Send</Button>
                <Button>
                  <Link href="/">Back</Link>
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default ForgotPassword
